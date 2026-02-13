import { useState } from "react";
import goatsImage from "@/assets/goats.jpg";
import logo from "@/assets/tmc-logo.png";

const Index = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt", { mobile, password });
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Goat image (desktop only) */}
      <div className="hidden lg:block lg:w-[55%] relative">
        <img
          src={goatsImage}
          alt="Indian goats against blue sky"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-8 left-8">
          <img src={logo} alt="The Meat Chop" className="w-28" />
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="relative flex-1 flex items-center justify-center px-6 py-12">
        {/* Mobile background */}
        <div className="absolute inset-0 lg:hidden">
          <img
            src={goatsImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>

        {/* Mobile logo */}
        <div className="absolute top-6 left-6 lg:hidden">
          <img src={logo} alt="The Meat Chop" className="w-20" />
        </div>

        <div className="relative w-full max-w-md">
          <h1 className="text-5xl font-bold italic text-primary mb-10">
            Welcome
          </h1>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="text-sm font-medium text-primary bg-background px-2 relative -mb-3 ml-4 block w-fit z-10">
                Mobile
              </label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full rounded-2xl border-2 border-primary bg-transparent px-5 py-4 text-foreground outline-none focus:ring-2 focus:ring-ring/30 placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-primary bg-background px-2 relative -mb-3 ml-4 block w-fit z-10">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl border-2 border-primary bg-transparent px-5 py-4 text-foreground outline-none focus:ring-2 focus:ring-ring/30 placeholder:text-muted-foreground"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-52 bg-primary text-primary-foreground py-4 text-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
