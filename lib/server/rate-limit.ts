/**
 * In-memory Rate-Limit-Schnittstelle. Ausreichend für eine einzelne Serverinstanz.
 * Für einen mehrinstanzigen Produktivbetrieb (z. B. mehrere Serverless-Instanzen)
 * hier durch einen geteilten Store ersetzen (z. B. Upstash Redis via REST-API) –
 * die Funktionssignatur bleibt dabei unverändert.
 */
type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export type RateLimitResult = {
  allowed: boolean;
  retryAfterSeconds: number;
};

export function checkRateLimit(key: string, limit = 5, windowMs = 60_000): RateLimitResult {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (bucket.count >= limit) {
    return { allowed: false, retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000) };
  }

  bucket.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}
