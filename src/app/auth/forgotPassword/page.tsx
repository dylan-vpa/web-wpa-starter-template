//Next.
import Link from "next/link";
//Components.
import { Button } from "@/core/components/ui/Button";
import { Input } from "@/core/components/ui/Input";
import { FormMessage } from "@/auth/components/ui/formMessage";
import { SmtpMessage } from "../smtpMessage";
//Supabase.
import { forgotPasswordAction } from "@/auth/lib/actions";
//Utils(Interfaces).
import type { Message } from "@/auth/lib/interfaces/components";

//Forgot Password Page.
export default async function ForgotPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  return (
    <form className="flex-1 flex flex-col min-w-64 max-w-64">
      <h1 className="text-2xl font-medium">Reset Password</h1>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <label htmlFor="email">Email</label>
        <Input name="email" placeholder="you@example.com" required />

        <Button
          type="submit"
          pendingText="Sending email..."
          formAction={forgotPasswordAction}
        >
          Reset Password
        </Button>

        <p className="text-sm text-foreground">
          Already have an account?{" "}
          <Link
            className="text-foreground font-medium underline"
            href="/auth/signIn"
          >
            Sign in
          </Link>
        </p>
        <FormMessage message={searchParams} />
      </div>
      <SmtpMessage />
    </form>
  );
}
