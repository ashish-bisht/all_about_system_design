# 🏗️ System Design Mastery

> Learn system design by **building real systems** — not just reading about them.

[![GitHub Pages](https://img.shields.io/badge/📖_Documentation-GitHub_Pages-blue)](https://yourusername.github.io/system-design-mastery/)
[![Projects](https://img.shields.io/badge/Projects-28-green)]()
[![License](https://img.shields.io/badge/License-MIT-yellow)]()

## 🎯 What is this?

A hands-on system design learning repo with **28 projects** ranging from URL shorteners to distributed databases. Each project includes working code, architecture diagrams, and detailed writeups.

## 📊 Project Roadmap

| Phase | Difficulty | Projects | Status |
|-------|-----------|----------|--------|
| 🟢 | Easy | 8 projects | 🔲 Not Started |
| 🟡 | Medium | 10 projects | 🔲 Not Started |
| 🔴 | Hard | 10 projects | 🔲 Not Started |

## 🗂️ Projects

### 🟢 Easy
| # | Project | Category | Key Concepts |
|---|---------|----------|-------------|
| 01 | [Bitly URL Shortener](projects/01-easy-bitly/) | Storage | Hashing, Base62, Read-heavy |
| 02 | [Pastebin](projects/02-easy-pastebin/) | Storage | Object storage, TTL, CDN |
| 03 | [Rate Limiter](projects/03-easy-rate-limiter/) | Infra | Token bucket, Sliding window |
| 04 | [Key-Value Store](projects/04-easy-kv-store/) | Database | LSM tree, Consistent hashing |
| 05 | [Task Queue](projects/05-easy-task-queue/) | Messaging | Workers, Retry, Dead letter |
| 06 | [Leaderboard](projects/06-easy-leaderboard/) | Real-time | Sorted sets, Redis, WebSocket |
| 07 | [URL Crawler](projects/07-easy-url-crawler/) | Data | BFS, Politeness, Dedup |
| 08 | [Chat App](projects/08-easy-chat-app/) | Real-time | WebSocket, Presence, Rooms |

### 🟡 Medium
| # | Project | Category | Key Concepts |
|---|---------|----------|-------------|
| 09 | [Dropbox](projects/09-med-dropbox/) | Storage | Chunking, Sync, Dedup |
| 10 | [Instagram](projects/10-med-instagram/) | Social | Feed, CDN, Image pipeline |
| 11 | [Twitter Timeline](projects/11-med-twitter-timeline/) | Social | Fan-out, Ranking, Cache |
| 12 | [Notification System](projects/12-med-notification/) | Messaging | Multi-channel, Priority, Templates |
| 13 | [Ticketmaster](projects/13-med-ticketmaster/) | Booking | Seat locking, Idempotency |
| 14 | [Yelp](projects/14-med-yelp/) | Search | Geospatial, QuadTree |
| 15 | [Web Crawler](projects/15-med-web-crawler/) | Data | Distributed, DNS, Robots.txt |
| 16 | [Typeahead](projects/16-med-typeahead/) | Search | Trie, Prefix matching |
| 17 | [API Gateway](projects/17-med-api-gateway/) | Infra | Routing, Auth, Rate limit |
| 18 | [Distributed Cache](projects/18-med-distributed-cache/) | Infra | Consistent hash, Eviction |

### 🔴 Hard
| # | Project | Category | Key Concepts |
|---|---------|----------|-------------|
| 19 | [YouTube](projects/19-hard-youtube/) | Streaming | Transcoding, Adaptive bitrate |
| 20 | [Uber](projects/20-hard-uber/) | Location | Geo matching, ETA, Surge |
| 21 | [Google Docs](projects/21-hard-google-docs/) | Real-time | CRDT, OT, Conflict resolution |
| 22 | [Search Engine](projects/22-hard-search-engine/) | Search | Inverted index, PageRank |
| 23 | [WhatsApp](projects/23-hard-whatsapp/) | Messaging | E2E encryption, Delivery |
| 24 | [Payment System](projects/24-hard-payment/) | Fintech | Idempotency, Ledger, PCI |
| 25 | [News Feed](projects/25-hard-news-feed/) | Social | ML ranking, Personalization |
| 26 | [Hotel Booking](projects/26-hard-hotel-booking/) | Booking | Inventory, Overbooking |
| 27 | [Stock Exchange](projects/27-hard-stock-exchange/) | Fintech | Order matching, Low latency |
| 28 | [Distributed DB](projects/28-hard-distributed-db/) | Database | Raft, WAL, B-tree |

## 🏛️ Design Patterns

Each project teaches reusable patterns. See the [Pattern Library →](docs/patterns/overview.html)

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/yourusername/system-design-mastery.git
cd system-design-mastery

# Pick a project and start
cd projects/01-easy-bitly
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## 📖 Documentation

Visit the [GitHub Pages site](https://yourusername.github.io/system-design-mastery/) for:
- Interactive architecture diagrams
- Pattern deep-dives
- Interview prep cheatsheets
- Project walkthroughs

## 🤝 Contributing

This is a learning repo — PRs welcome! See [CONTRIBUTING.md](CONTRIBUTING.md).

## 📄 License

MIT License — learn, build, share!
