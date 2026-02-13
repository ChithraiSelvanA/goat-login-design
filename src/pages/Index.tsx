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

        <div className="relative w-full max-w-lg px-4">
          <h1 className="text-6xl lg:text-7xl font-bold italic text-primary mb-8">
            Welcome
          </h1>

          <form onSubmit={handleLogin} className="space-y-5">
            <fieldset className="border-2 border-primary rounded-2xl px-5 pt-1 pb-4">
              <legend className="text-base font-medium text-primary px-2">
                Mobile
              </legend>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full bg-transparent text-foreground text-lg outline-none"
              />
            </fieldset>

            <fieldset className="border-2 border-primary rounded-2xl px-5 pt-1 pb-4">
              <legend className="text-base font-medium text-primary px-2">
                Password
              </legend>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-foreground text-lg outline-none"
              />
            </fieldset>

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="w-56 bg-primary text-primary-foreground py-4 text-xl font-semibold hover:opacity-90 transition-opacity"
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
