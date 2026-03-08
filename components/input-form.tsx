'use client';

import { useState } from 'react';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTest = async () => {
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const testUrl = `https://yhxzjyykdsfkdrmdxgho.supabase.co/functions/v1/application-task?url=${encodeURIComponent(url)}&email=${encodeURIComponent(email)}`;
      const res = await fetch(testUrl);
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError('Something went wrong. Check your URL and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>One Eleven — API Tester</CardTitle>
          <CardDescription>
            Test your sort endpoint against the One Eleven validation service.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email Address</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="url">API Endpoint URL</FieldLabel>
              <Input
                id="url"
                type="url"
                placeholder="Enter your API endpoint URL"
                value={url}
                onChange={e => setUrl(e.target.value)}
                required
              />
            </Field>
            <Field>
              <Button
                type="button"
                disabled={loading || !email || !url}
                onClick={handleTest}
              >
                {loading ? 'Testing...' : 'Test Endpoint'}
              </Button>
            </Field>

            {result && (
              <Field>
                <FieldLabel>Response</FieldLabel>
                <div className="rounded-md bg-green-50 border border-green-200 p-4">
                  <pre className="text-sm text-green-800 whitespace-pre-wrap">
                    {JSON.stringify(result, null, 2)}
                  </pre>
                </div>
              </Field>
            )}

            {error && (
              <Field>
                <FieldDescription className="text-red-500">
                  {error}
                </FieldDescription>
              </Field>
            )}
          </FieldGroup>
        </CardContent>
      </Card>
    </div>
  )
}