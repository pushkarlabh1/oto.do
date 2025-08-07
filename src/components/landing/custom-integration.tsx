import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export function CustomIntegration() {
  return (
    <section className="text-center py-8 sm:py-10" style={{ backgroundColor: "#f9f7ff" }} >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-[#6F5CFF] font-bold mb-6 font-headline">Want a new integration?</h2>
        <Button size="lg" className="text-xl bg-[#6F5CFF] text-white hover:bg-[#6F5CFF]/90">
          <MessageSquare className="mr-3 h-6 w-6" />
          Reach out
        </Button>
      </div>
    </section>
  );
}
