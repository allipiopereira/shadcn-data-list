import datalist from "./datalist.json";

export async function GET() {
  return new Response(JSON.stringify(datalist), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
