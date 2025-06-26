import React from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  pageName?: string;
  variant?: 'default' | 'minimal' | 'detailed' | 'compact';
  separator?: React.ReactNode;
  showHome?: boolean;
  homeIcon?: React.ReactNode;
  homeLabel?: string;
  homeHref?: string;
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
  navClassName?: string;
  showTitle?: boolean;
  titleIcon?: React.ReactNode;
  maxItems?: number;
  truncateItems?: boolean;
}

export type BreadcrumbVariant = 'default' | 'minimal' | 'detailed' | 'compact';

export interface BreadcrumbContainerProps {
  variant: BreadcrumbVariant;
  children: React.ReactNode;
  className?: string;
}

export interface BreadcrumbTitleProps {
  pageName?: string;
  icon?: React.ReactNode;
  variant: BreadcrumbVariant;
  className?: string;
}

export interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
  separator: React.ReactNode;
  variant: BreadcrumbVariant;
  maxItems?: number;
  truncateItems?: boolean;
  className?: string;
} 