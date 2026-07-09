# 사람인 입력용 이력서

## 이력서 제목

CCTV/RTSP 이상행동 탐지와 관제 시스템을 구현한 AI 융합보안 개발자

대체 제목: 실시간 영상 AI 기반 융합보안 관제 시스템 개발자

## 핵심역량 키워드

CCTV/RTSP, 실시간 영상 AI, 이상행동 탐지, YOLO26n-pose, ByteTrack, LSTM, TensorRT, PyTorch/TensorRT 지연시간 비교, 탐지 결과 동등성 검증, MQTT, Spring Boot, WebSocket, React Dashboard, RF-DETR, VAE, Docker

## 자기소개 요약

의공학 기반 영상 AI 경험을 바탕으로 CCTV/RTSP 환경의 실시간 이상행동 탐지 시스템을 구현했습니다.  
YOLO26n-pose, ByteTrack, LSTM 기반으로 낙상·실신 등 행동 분석 흐름을 구성했습니다.  
AI 분석 결과를 MQTT, Spring Boot, WebSocket, React 대시보드로 전달하는 관제 이벤트 파이프라인을 연동했습니다.  
RTSP/MJPEG 스트림 지연과 AI 추론 병목으로 인한 오버레이 불일치 문제를 분석하고, TensorRT 기반 추론 최적화와 지연시간 비교를 수행했습니다.  
RF-DETR 객체 탐지와 VAE 비지도 이상탐지를 통해 실시간 객체 탐지, 오탐 제어, 후처리 경험을 함께 쌓았습니다.

## 주요 프로젝트 1

프로젝트명: RTSP/CCTV 기반 실시간 AI 안전관리 및 관제 시스템  
기간: 2026.05-2026.07  
역할: AI/Backend/Frontend  
사용기술: Python, Spring Boot, React, MQTT, WebSocket/STOMP, MediaMTX, YOLO26n-pose, ByteTrack, LSTM, TensorRT, Docker

RTSP/CCTV 영상에서 낙상·실신 등 이상행동을 탐지하고, 분석 결과를 관제 대시보드로 전달하는 실시간 이벤트 파이프라인을 구현했습니다.  
YOLO26n-pose, ByteTrack, LSTM 기반으로 시계열 행동 분석 흐름을 구성했습니다.  
MQTT, Spring Boot, WebSocket, React Dashboard를 연동해 AI 탐지 결과가 화면 알림과 오버레이로 이어지도록 구현했습니다.  
Reader/Inference 분리와 Bounded Queue를 적용해 다중 카메라 환경의 프레임 누적 문제를 완화했습니다.  
RTSP/MJPEG 스트림 지연과 AI 추론 병목으로 인한 오버레이 불일치 문제를 분석했습니다.  
TensorRT 기반 YOLO Pose 추론 최적화를 적용하고, PyTorch/TensorRT 모델의 지연시간 비교와 탐지 결과 동등성 검증으로 관제 파이프라인 적용 가능성을 검토했습니다.  
LSTM 검증 기준 Faint Recall 0.774547, F1 0.756179를 기록했습니다.  
overlay-sync 계약 및 동작 시뮬레이션 테스트 44개 PASS로 지연 분석 로직을 검증했습니다.

## 주요 프로젝트 2

프로젝트명: RF-DETR 기반 실시간 객체 탐지 시스템  
기간: 2025.03-2025.11  
역할: AI  
사용기술: Python, PyTorch, RF-DETR, DINOv2, OpenCV, Albumentations

Kvasir 데이터셋 기반으로 RF-DETR + DINOv2 구조를 파인튜닝하여 대장 내 용종 객체 탐지 모델을 구현했습니다.  
Grid Distortion, Elastic Deformation 증강을 적용해 내시경 영상의 조명 변화, 반사, 기하학적 왜곡에 대응했습니다.  
confidence threshold 조정을 통해 오탐·미탐 균형을 조정했습니다.  
OpenCV GUI에서 탐지 결과를 실시간 오버레이로 시각화했습니다.  
Kvasir 테스트셋 기준 mAP@50 86.2%, 22+ FPS를 기록하고 캡스톤 및 공학교육혁신 경진대회 수상으로 결과를 검증했습니다.

## 주요 프로젝트 3

프로젝트명: VAE 기반 비지도 이상탐지 및 Dynamic Threshold 후처리  
기간: 2024.03-2024.10  
역할: AI  
사용기술: Python, TensorFlow, VAE, OpenCV, Dynamic Threshold

이상 라벨 확보가 어려운 의료 영상 환경을 VAE 기반 비지도 이상탐지 문제로 재정의했습니다.  
정상 데이터 분포를 학습한 뒤 Reconstruction Error Map을 생성해 이상 후보 영역을 시각화했습니다.  
입력 영상별 노이즈와 밝기 편차를 반영하는 Dynamic Threshold 후처리를 적용했습니다.  
고정 threshold 방식에서 발생할 수 있는 오탐 변동 문제를 완화하는 흐름을 구현했습니다.  
비지도 이상탐지와 후처리 알고리즘 설계 경험을 바탕으로 2024 창의혁신 DNA 산학협력 공학혁신상을 수상했습니다.

## 보유 기술

영상 AI: RTSP/CCTV, MediaMTX, YOLO26n-pose, ByteTrack, LSTM  
추론 최적화: TensorRT, PyTorch/TensorRT 지연시간 비교, 탐지 결과 동등성 검증  
이벤트 파이프라인: MQTT, Spring Boot, WebSocket/STOMP, React Dashboard  
관제 지연 분석: RTSP/MJPEG 스트림 지연, frameId/timestamp payload, OverlaySyncBuffer  
객체 탐지: RF-DETR, DINOv2, OpenCV, Albumentations, confidence threshold tuning  
이상탐지: VAE, Reconstruction Error Map, Dynamic Threshold  
백엔드 및 배포: Java, Spring Boot, JWT, CORS, Cloudflare Pages/Workers, Docker

## 교육 및 수상

건양대학교 의공학과 학사  
SK쉴더스 지능형 애플리케이션 개발 부트캠프 5기 (2026.05-2026.07)  
2024 창의혁신 DNA 산학협력 공학혁신상  
제17회 건양대학교 캡스톤디자인 경진대회 금상/대상  
전국 공학교육혁신 컨소시엄 창의적 종합설계 경진대회 동상  
의공학 전문 실무역량 인증, 우수 소프트웨어 활용역량 인증  
정보처리기사 필기 합격
