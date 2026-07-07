---
title: Smart Safety Incident Event Metadata
category: incident-event
updatedAt: 2026-07-04
incidentAt: 2026-07-04T09:30:00+09:00
cameraId: demo-camera-rtsp-01
eventType: fall-risk-review
severity: medium
tags: [smart-safety, rtsp, mqtt, evidence-chain, incident-search]
summary: Incident/event document shape used to test whether safety events can be found by time, camera, event type, and severity metadata.
---

# Smart Safety Incident Event Metadata

This document is a lightweight search fixture for the portfolio wiki index. It keeps accident and event records queryable by `title`, `category`, `updatedAt`, `incidentAt`, `cameraId`, `eventType`, and `severity` without requiring a live LLM call.

The intended retrieval path is metadata filtering first, then BM25 keyword search and vector search, combined with RRF ranking. Optional re-ranking and document-relationship analysis can be added after the corpus grows.
