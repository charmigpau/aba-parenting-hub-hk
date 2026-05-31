import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const BookingSchema = z.object({
  parentName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z
    .string()
    .trim()
    .min(6)
    .max(32)
    .regex(/^[0-9+\-()\s]+$/, "Invalid phone number"),
  childAge: z
    .string()
    .trim()
    .max(20)
    .regex(/^[0-9A-Za-z\s\-]*$/)
    .optional()
    .or(z.literal("")),
  areaOfConcern: z.enum([
    "communication",
    "social",
    "behavior",
    "daily-living",
    "school-readiness",
    "parent-coaching",
    "other",
  ]),
  preferredLanguage: z.enum(["en", "yue", "cmn"]),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
  consent: z.literal(true),
});

export const Route = createFileRoute("/api/public/booking-request")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
        }

        const parsed = BookingSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { ok: false, error: "Validation failed", issues: parsed.error.flatten() },
            { status: 400 },
          );
        }

        // Intake received. No PII is logged. Wire this to email / DB when ready.
        // e.g. send to a queue, call an email API, or insert into a database.
        console.log("[booking] intake received", {
          area: parsed.data.areaOfConcern,
          lang: parsed.data.preferredLanguage,
          at: new Date().toISOString(),
        });

        return Response.json({ ok: true });
      },
    },
  },
});
