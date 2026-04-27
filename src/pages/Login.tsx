import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Building2, CheckCircle2, Eye, EyeOff, Loader2, LockKeyhole, Mail, ShieldCheck, UserRound } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

import threxaIcon from "@/assets/threxa-icon.png";
import teamPhoto from "@/assets/team-collaboration.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { lovable } from "@/integrations/lovable/index";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z.string().trim().email("Enter a valid email address").max(255);
const passwordSchema = z.string().min(8, "Password must be at least 8 characters").max(72);
const nameSchema = z.string().trim().min(2, "Name must be at least 2 characters").max(80);
const companySchema = z.string().trim().max(100).optional();

type AuthMode = "signin" | "signup";

const Login = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<AuthMode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const title = mode === "signin" ? "Welcome back" : "Start with Threxa";
  const subtitle = mode === "signin" ? "Sign in to continue to your workspace." : "Create your account and bring your team into a calmer workflow.";

  const benefits = useMemo(
    () => ["Private workspace for every team", "Profile-ready onboarding", "Protected by verified email sign-in"],
    [],
  );

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) return;
      window.setTimeout(async () => {
        await supabase.from("profiles").upsert({
          user_id: session.user.id,
          display_name: session.user.user_metadata?.display_name ?? session.user.user_metadata?.full_name ?? null,
          avatar_url: session.user.user_metadata?.avatar_url ?? null,
          company_name: session.user.user_metadata?.company_name ?? null,
          role_title: session.user.user_metadata?.role_title ?? "Founder",
        });
      }, 0);
    });

    supabase.auth.getSession().then(({ data }) => {
      if (data.session?.user) navigate("/", { replace: true });
    });

    return () => authListener.subscription.unsubscribe();
  }, [navigate]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsedEmail = emailSchema.safeParse(email);
    const parsedPassword = passwordSchema.safeParse(password);
    const parsedName = mode === "signup" ? nameSchema.safeParse(displayName) : { success: true as const, data: displayName };
    const parsedCompany = companySchema.safeParse(companyName);

    if (!parsedEmail.success || !parsedPassword.success || !parsedName.success || !parsedCompany.success) {
      toast.error("Please check your details", {
        description: parsedEmail.error?.issues[0]?.message ?? parsedPassword.error?.issues[0]?.message ?? (!parsedName.success ? parsedName.error.issues[0]?.message : "Keep each field within the limit."),
      });
      return;
    }

    setLoading(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email: parsedEmail.data, password });
        if (error) throw error;
        toast.success("Signed in successfully");
        navigate("/");
      } else {
        const { error } = await supabase.auth.signUp({
          email: parsedEmail.data,
          password,
          options: {
            emailRedirectTo: window.location.origin,
            data: {
              display_name: parsedName.data,
              company_name: parsedCompany.data || null,
              role_title: "Founder",
            },
          },
        });
        if (error) throw error;
        toast.success("Check your email", { description: "Confirm your account, then come back to sign in." });
        setMode("signin");
      }
    } catch (error) {
      toast.error(mode === "signin" ? "Sign in failed" : "Signup failed", {
        description: error instanceof Error ? error.message : "Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setGoogleLoading(true);
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    setGoogleLoading(false);

    if (result.error) {
      toast.error("Google sign-in failed", { description: result.error.message });
      return;
    }

    if (!result.redirected) navigate("/");
  };

  return (
    <main className="min-h-screen bg-gradient-hero px-6 py-6 text-foreground lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-3 font-brand text-sm font-extrabold uppercase tracking-[0.18em]">
          <img src={threxaIcon} alt="Threxa icon" className="h-10 w-14 object-contain" />
          Threxa
        </Link>
        <Button asChild variant="glass" className="rounded-full">
          <Link to="/"><ArrowLeft className="h-4 w-4" /> Back home</Link>
        </Button>
      </div>

      <section className="mx-auto grid max-w-7xl gap-10 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-16">
        <div className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/15 bg-card/80 p-3 shadow-soft backdrop-blur-xl">
            <img src={teamPhoto} alt="Team working together inside a bright SaaS office" className="h-[560px] w-full rounded-[1.35rem] object-cover" />
            <div className="absolute inset-3 rounded-[1.35rem] bg-gradient-to-t from-foreground/50 via-foreground/12 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-primary/15 bg-card/94 p-5 shadow-soft backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-gradient-brand p-3 text-primary-foreground shadow-glow">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground">Workspace ready</p>
                  <p className="text-2xl font-extrabold">Invite your team with confidence.</p>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="rounded-xl bg-secondary p-3 text-sm font-bold text-secondary-foreground">
                    <CheckCircle2 className="mb-2 h-4 w-4 text-primary" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mx-auto max-w-xl rounded-[1.75rem] border border-primary/15 bg-card/90 p-6 shadow-soft backdrop-blur-xl sm:p-8">
            <div className="mb-8">
              <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-primary">Secure access</p>
              <h1 className="mt-3 text-4xl font-extrabold leading-tight lg:text-5xl">{title}</h1>
              <p className="mt-3 text-muted-foreground">{subtitle}</p>
            </div>

            <div className="mb-6 grid grid-cols-2 rounded-full bg-secondary p-1">
              <button type="button" onClick={() => setMode("signin")} className={`rounded-full px-4 py-2 text-sm font-extrabold transition ${mode === "signin" ? "bg-card text-foreground shadow-soft" : "text-muted-foreground"}`}>Sign in</button>
              <button type="button" onClick={() => setMode("signup")} className={`rounded-full px-4 py-2 text-sm font-extrabold transition ${mode === "signup" ? "bg-card text-foreground shadow-soft" : "text-muted-foreground"}`}>Create account</button>
            </div>

            <Button type="button" variant="glass" size="lg" className="w-full rounded-full" onClick={handleGoogle} disabled={googleLoading || loading}>
              {googleLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
              Continue with Google
            </Button>

            <div className="my-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
              <span className="h-px flex-1 bg-border" /> or use email <span className="h-px flex-1 bg-border" />
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {mode === "signup" && (
                <>
                  <label className="block text-sm font-bold">
                    Full name
                    <div className="relative mt-2">
                      <UserRound className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input value={displayName} onChange={(event) => setDisplayName(event.target.value)} className="h-12 rounded-xl pl-10" placeholder="Avery Stone" autoComplete="name" />
                    </div>
                  </label>
                  <label className="block text-sm font-bold">
                    Company
                    <div className="relative mt-2">
                      <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input value={companyName} onChange={(event) => setCompanyName(event.target.value)} className="h-12 rounded-xl pl-10" placeholder="Northstar Labs" autoComplete="organization" />
                    </div>
                  </label>
                </>
              )}

              <label className="block text-sm font-bold">
                Email
                <div className="relative mt-2">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="h-12 rounded-xl pl-10" placeholder="team@company.com" autoComplete="email" />
                </div>
              </label>

              <label className="block text-sm font-bold">
                Password
                <div className="relative mt-2">
                  <LockKeyhole className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} className="h-12 rounded-xl pl-10 pr-11" placeholder="Minimum 8 characters" autoComplete={mode === "signin" ? "current-password" : "new-password"} />
                  <button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground" aria-label={showPassword ? "Hide password" : "Show password"}>
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </label>

              <Button type="submit" variant="brand" size="lg" className="w-full rounded-full" disabled={loading || googleLoading}>
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                {mode === "signin" ? "Sign in" : "Create account"} <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
