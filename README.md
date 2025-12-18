# 나와 맞는 영화 캐릭터 찾기 - 프로젝트 설명

## 📋 프로젝트 개요

사용자의 성향을 분석하여 MBTI 기반으로 가장 어울리는 영화 캐릭터를 매칭해주는 인터랙티브 웹 애플리케이션입니다. 12개의 질문에 답변하면 MBTI 유형을 계산하고, 해당 유형에 맞는 영화 캐릭터와 상세한 설명을 제공합니다.

## 🛠️ 사용 기술 스택

### 프론트엔드 프레임워크
- **Next.js 15.2.8** (App Router)
  - 서버 사이드 렌더링과 클라이언트 사이드 라우팅을 활용한 하이브리드 렌더링
  - App Router를 통한 파일 기반 라우팅 시스템 구현
  - `useSearchParams`를 활용한 동적 라우팅 및 결과 페이지 URL 파라미터 처리
  - `Suspense`를 활용한 비동기 데이터 로딩 처리

- **React 19.0.0**
  - 함수형 컴포넌트와 Hooks를 활용한 상태 관리
  - `useState`, `useEffect`를 통한 컴포넌트 생명주기 관리
  - 클라이언트 컴포넌트(`"use client"`)를 통한 인터랙티브 UI 구현

### 언어 및 타입 시스템
- **TypeScript 5**
  - 타입 안정성을 통한 런타임 에러 방지
  - 인터페이스를 통한 데이터 구조 정의 (`Question`, `ResultProps`, `Character` 등)
  - 타입 추론을 통한 개발 생산성 향상

### 스타일링
- **CSS Modules**
  - 컴포넌트별 스코프 격리를 통한 스타일 충돌 방지
  - 각 컴포넌트에 독립적인 스타일 파일 관리 (`*.module.css`)

### 상태 관리 및 데이터 페칭
- **React Context API**
  - `URLContext`를 통한 전역 상태 관리 (현재 페이지 URL 저장)
  - SNS 공유 기능을 위한 URL 정보 전역 공유
  - Provider 패턴을 통한 컴포넌트 트리 전역 데이터 제공

- **Custom Hooks**
  - `useFetchQuestion`: 질문 데이터 JSON 파일 비동기 로딩
  - `useFetchResult`: 캐릭터 결과 데이터 JSON 파일 비동기 로딩
  - 재사용 가능한 로직 분리 및 컴포넌트 코드 간소화

### 배포
- **Vercel**
  - Next.js 최적화된 배포 환경
  - 자동 빌드 및 배포 파이프라인

## 🎯 주요 기능 및 기술 구현

### 1. 질문 진행 시스템
- **구현 방식**: `useState`를 통한 현재 질문 인덱스 및 답변 배열 관리
- **동작 원리**: 
  - 사용자가 답변을 선택하면 `answers` 배열에 MBTI 지표 값(E, I, S, N, T, F, J, P) 저장
  - 12개 질문 완료 시 `generateType` 함수로 최종 MBTI 유형 계산
  - 다수결 원칙을 적용한 4개 차원(EI, SN, TF, JP)별 결과 도출

### 2. MBTI 알고리즘
- **구현 위치**: `src/app/(common-main)/question/page.tsx`의 `generateType` 함수
- **동작 방식**:
  - 각 답변의 MBTI 지표 값을 카운팅
  - 차원별(EI, SN, TF, JP)로 다수결 원칙 적용
  - 최종 4자리 MBTI 유형 문자열 생성 (예: "ENFP", "ISTJ")

### 3. 결과 페이지 동적 렌더링
- **구현 방식**: URL 쿼리 파라미터(`?res=ENFP`)를 통한 결과 매칭
- **기술 활용**:
  - `useSearchParams`로 URL 파라미터 추출
  - `character.json` 데이터에서 해당 MBTI 유형의 캐릭터 정보 조회
  - 대표 캐릭터, 관련 캐릭터, 키워드, 상세 설명 등 구조화된 데이터 표시

### 4. 데이터 관리
- **JSON 기반 데이터 저장**:
  - `public/data/question.json`: 12개 질문 및 답변 옵션
  - `public/data/character.json`: 16개 MBTI 유형별 캐릭터 정보
- **비동기 데이터 로딩**: `fetch` API를 통한 클라이언트 사이드 데이터 페칭
- **에러 핸들링**: try-catch를 통한 에러 처리 및 기본값 설정

### 5. SNS 공유 기능
- **구현 방식**: 
  - `URLContext`에 저장된 현재 페이지 URL을 클립보드에 복사
  - `document.execCommand("copy")`를 활용한 URL 복사 기능
- **사용 목적**: 사용자가 결과를 쉽게 공유할 수 있도록 지원

### 6. 컴포넌트 구조
- **재사용 가능한 컴포넌트 설계**:
  - `Button`: 다양한 타입(`btn-answer`, `btn-share`, `btn-restart`) 지원
  - `QuestionBox`: 질문 및 답변 옵션 렌더링
  - `FilmBorder`: 영화 필름 스타일의 테두리 디자인 컴포넌트
  - `Loading`: 데이터 로딩 중 표시되는 로딩 컴포넌트
  - `ResultCharacter`, `RelateCharacter`: 결과 페이지의 캐릭터 정보 표시

### 7. SEO 및 메타데이터
- **구현 위치**: `src/app/layout.tsx`의 `metadata` 객체
- **기능**: Open Graph 태그를 통한 SNS 공유 시 미리보기 이미지 및 설명 제공

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router 페이지
│   ├── (common-main)/      # 메인 및 질문 페이지 그룹
│   │   ├── page.tsx        # 홈 페이지
│   │   └── question/       # 질문 진행 페이지
│   └── result/             # 결과 페이지
├── components/             # 재사용 가능한 UI 컴포넌트
├── context/                # Context API 상태 관리
├── hooks/                  # Custom Hooks
├── types/                  # TypeScript 타입 정의
└── util/                   # 유틸리티 함수
```

## 🎨 주요 특징

1. **타입 안정성**: TypeScript를 통한 엔드투엔드 타입 체크
2. **컴포넌트 재사용성**: 모듈화된 컴포넌트 설계로 유지보수성 향상
3. **사용자 경험**: 로딩 상태 처리 및 부드러운 페이지 전환
4. **반응형 디자인**: CSS Modules를 통한 모바일 친화적 레이아웃
5. **성능 최적화**: Next.js의 이미지 최적화(`next/image`) 및 코드 스플리팅 활용

## 🚀 배포 및 접근

- **배포 플랫폼**: Vercel
- **배포 URL**: https://find-movie-character.vercel.app

