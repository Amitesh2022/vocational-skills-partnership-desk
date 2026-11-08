# Vocational Skills Partnership Desk

## One-sentence benefit

Connect training providers and strategic industries around practical skills partnerships with clear delivery ownership.

## Live demo

[Watch the workflow](docs/demo.webm).

## Screenshots

![Vocational partnership dashboard](docs/screenshot.png)

## Main features

- Search and sort partnership cases across sectors and regions.
- Create a new partnership through the Java service.
- Advance draft and review cases toward approval.
- View delivery guidance on a separate route.
- Handle loading, empty, error and success states responsively.

## Technology used

Vue 3, TypeScript, Pinia, Vue Router, Vite, Spring Boot and Java 21.

## Installation instructions

Install Node.js 22 and Java 21. Run `npm install`, then start the backend with `cd backend && mvn spring-boot:run`. In another terminal run `npm run dev`.

## Commercial licensing/contact

Commercial licensing and integration support are available. Use the repository contact options to discuss deployment.

## Business problem and users

VET providers, employers, sector bodies and public skills agencies need to align training equipment, placements and short learning modules with real workforce demand.

## Key workflows

Find a skills gap, add a partnership case, review its owner and priority, advance delivery status and consult the guidance page.

## Vue framework highlights

Pinia provides reactive API state and computed metrics, Vue Router separates operational and guidance views, and Vue templates expose accessible live updates.

## Java backend highlights

Spring Boot supplies validated list, search, create and update APIs, consistent error responses, a health endpoint and tested service rules.

## Architecture and state flow

Vue actions call `/api/items` through the development proxy. The Java controller validates requests, the service owns workflow state and responses update the Pinia store.

## Accessibility and responsive behaviour

The interface uses labelled search, semantic navigation, keyboard controls, readable status text and layouts that collapse cleanly on small screens.

## Verification commands

Run `npm test`, `npm run build`, `cd backend && mvn test` and `cd backend && mvn package`.

## Structure

`src` holds the Vue routes and store, `backend` holds the Java API, and `docs` holds inspected media.

## Tradeoffs

The sample uses in-memory records for a fast local setup. A production service should add identity, persistence and partner data exchange.

## Roadmap

Add apprenticeship capacity planning, mobility matching, outcomes evidence and multilingual programme catalogues.
