const fs = require('fs');
const path = require('path');

function write(file, content = "") {
    const dir = path.dirname(file);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(file, content);
    console.log("✓ Created:", file);
}

console.log("\n🚀 Creating Zero Prediction Hub structure...\n");

// --- APP ROUTES ---

write("app/page.tsx", `export default function Page() {
  return <div className="p-6 text-center">Splash Screen</div>;
}`);

write("app/layout.tsx", `export const metadata = { title: "Zero Prediction Hub" };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}`);

write("app/connect/page.tsx", `export default function ConnectPage() {
  return <div className="p-6 text-center">Connect Wallet Screen</div>;
}`);

write("app/feed/page.tsx", `export default function FeedPage() {
  return <div className="p-6">Daily Feed</div>;
}`);

write("app/predict/[id]/page.tsx", `export default function PredictPage({ params }) {
  return <div className="p-6">Prediction Detail: {params.id}</div>;
}`);

write("app/success/[id]/page.tsx", `export default function SuccessPage({ params }) {
  return <div className="p-6">Success: {params.id}</div>;
}`);

write("app/event/[id]/page.tsx", `export default function EventPage({ params }) {
  return <div className="p-6">Event Status: {params.id}</div>;
}`);

write("app/leaderboard/page.tsx", `export default function LeaderboardPage() {
  return <div className="p-6">Leaderboard</div>;
}`);

write("app/profile/page.tsx", `export default function ProfilePage() {
  return <div className="p-6">Profile</div>;
}`);

write("app/admin/page.tsx", `export default function AdminPage() {
  return <div className="p-6">Admin Panel</div>;
}`);

// --- API ROUTES ---
write("app/api/og/[id]/route.ts", `export async function GET(req, { params }) {
  return new Response("OG Image for " + params.id);
}`);

write("app/api/events/route.ts", `export async function GET() {
  return Response.json({ events: [] });
}
export async function POST(req) {
  return Response.json({ ok: true });
}`);

write("app/api/events/[id]/route.ts", `export async function GET(req, { params }) {
  return Response.json({ event: params.id });
}`);

write("app/api/leaderboard/route.ts", `export async function GET() {
  return Response.json({ leaderboard: [] });
}`);

// --- COMPONENTS ---

write("components/layout/AppHeader.tsx", `export default function AppHeader() {
  return <header className="p-4 border-b border-white/10">Header</header>;
}`);

write("components/layout/AppFooter.tsx", `export default function AppFooter() {
  return <footer className="p-4 border-t border-white/10">Footer</footer>;
}`);

write("components/layout/PageShell.tsx", `export default function PageShell({ children }) {
  return <div className="max-w-xl mx-auto">{children}</div>;
}`);

write("components/ui/Button.tsx", `export default function Button({ children }) {
  return <button className="px-4 py-2 bg-blue-600 rounded">{children}</button>;
}`);

write("components/ui/Card.tsx", `export default function Card({ children }) {
  return <div className="p-4 border border-white/10 rounded">{children}</div>;
}`);

write("components/ui/Badge.tsx", `export default function Badge({ children }) {
  return <span className="px-2 py-1 bg-white/10 rounded">{children}</span>;
}`);

write("components/ui/LoadingSpinner.tsx", `export default function LoadingSpinner() {
  return <div className="animate-spin text-3xl">⏳</div>;
}`);

write("components/ui/EmptyState.tsx", `export default function EmptyState({ text }) {
  return <div className="text-center text-white/50">{text}</div>;
}`);

write("components/prediction/PredictionCard.tsx", `export default function PredictionCard({ title }) {
  return <div className="p-4 border border-white/10 rounded">{title}</div>;
}`);

write("components/prediction/PredictionStats.tsx", `export default function PredictionStats() {
  return <div>Stats</div>;
}`);

write("components/prediction/MintStatus.tsx", `export default function MintStatus() {
  return <div>Mint Status</div>;
}`);

write("components/leaderboard/LeaderboardTable.tsx", `export default function LeaderboardTable() {
  return <div>Table</div>;
}`);

write("components/profile/PredictionHistory.tsx", `export default function PredictionHistory() {
  return <div>History</div>;
}`);

// --- LIB ---

write("lib/minikit/client.ts", `export const MiniAppClient = {
  mint: async () => ({ ok: true }),
};`);

write("lib/minikit/wallet.ts", `export const Wallet = {
  address: null,
  connect: async () => "connected",
};`);

write("lib/data/events.ts", `export const events = [];`);

write("lib/data/leaderboard.ts", `export const leaderboard = [];`);

write("lib/data/profile.ts", `export const profile = {};`);

write("lib/types/event.ts", `export interface Event { id: string; title: string; }`);

write("lib/types/user.ts", `export interface User { address: string; }`);

write("lib/api-client.ts", `export async function api(path) { 
  const res = await fetch(path);
  return res.json();
}`);

write("lib/constants.ts", `export const APP_NAME = "Zero Prediction Hub";`);

write("lib/utils.ts", `export function formatDate(date) { return date.toString(); }`);

// --- PUBLIC ---
write("public/logo.svg", `<svg></svg>`);

// --- MINIKIT MANIFEST ---
write("minikit.json", `{
  "name": "Zero Prediction Hub",
  "iconUrl": "/logo.svg",
  "homeUrl": "/"
}`);

console.log("\n🎉 Structure created successfully!\n");
