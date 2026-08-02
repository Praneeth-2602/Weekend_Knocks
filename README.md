# Weekend Knocks

Inter-college **eSports community** site for students in India — marketing pages, auth, and event showcase UI aimed at Saturday-night tournaments and team play.

> Honest status: this is an **early Next.js shell** (auth + content UI + OSS community scaffolding). Tournament backends, live matchmaking, Discord bots, and leaderboards from the long-term roadmap are **not fully implemented** yet.

## What’s working today

| Area | Status |
|---|---|
| Marketing / landing UI | Working |
| Signup / login / email verify API routes | Working (Mongo + JWT cookies) |
| Events showcase pages | Present (largely **static / example** cards) |
| GitHub community workflows (SWOC-style) | Present |
| Tournament engine, matchmaking, Discord bot | Roadmap |

## Stack

- **Next.js 14** (App Router) + React 18 + TypeScript  
- **Tailwind** + Radix UI + Framer Motion / GSAP  
- **MongoDB** via Mongoose  
- **JWT** + bcrypt auth in Next route handlers  
- Email via Nodemailer / Resend (see `example.env`)

There is **no separate Express app** in this tree; API routes live under `app/api/`.

## Quick start

```bash
cd Weekend_Knocks
cp example.env .env.local
# set MONGO_URI, JWT_SECRET, and email vars
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (Next default — not port 5000).

### Environment

| Variable | Purpose |
|---|---|
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Cookie / token signing |
| `BASE_URL` | Canonical site URL |
| Email host/user/pass | Verification mail (Mailtrap or Resend) |

Do not commit real credentials. `example.env` is a template only.

## Layout

```
app/
  (marketing)/ (auth)/ (showcase)/ (user)/   # route groups
  api/signup|login|verifyEmail/
components/   # UI
models/       # User mongoose model
lib/          # db helpers
.github/      # contribution automation
```

## Roadmap

### Phase 1 — Core product
- [ ] Inter-college team matchmaking  
- [ ] Tournament hosting module  
- [ ] Live leaderboards  

### Phase 2 — Community
- [ ] Discord bot integration  
- [ ] Match highlights / reports  

### Phase 3 — Advanced
- [ ] AI-assisted team recommendations  
- [ ] Broader client platforms  

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

Thanks to **Social Winter of Code (SWOC)** supporters and [contributors](https://github.com/Praneeth-2602/Weekend_Knocks/graphs/contributors).

## License / community

Open to student contributors; open an issue for questions or feature pitches.
