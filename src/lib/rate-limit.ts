// インメモリレート制限（IP単位）
const requests = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 60_000; // 1分
const MAX_REQUESTS = 5; // 1分あたりの最大リクエスト数

export function rateLimit(request: Request): { success: boolean } {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";

  const now = Date.now();
  const entry = requests.get(ip);

  if (!entry || now > entry.resetAt) {
    requests.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { success: true };
  }

  entry.count++;
  if (entry.count > MAX_REQUESTS) {
    return { success: false };
  }

  return { success: true };
}
