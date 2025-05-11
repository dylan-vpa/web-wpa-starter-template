//Next.
import { redirect } from "next/navigation";

/**
 * @param {('error' | 'success')} type 
 * @param {string} path 
 * @param {string} message 
 * @returns {never}
 */
export function encodedRedirect(
  type: "error" | "success",
  path: string,
  message: string,
) {
  return redirect(`${path}?${type}=${encodeURIComponent(message)}`);
}
