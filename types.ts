import React from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  items: string[];
}