export interface SectionConfig {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconName: string;
  badgeColor: string;
  accentColor: string;
  gradient: string;
}

export const SECTIONS: Record<string, SectionConfig> = {
  'clinical-zone': {
    id: 'clinical-zone',
    name: 'Clinical Zone',
    slug: 'clinical-zone',
    description: 'Evidence-based resuscitation algorithms, emergency procedures, and high-acuity clinical protocols.',
    iconName: 'Activity',
    badgeColor: 'border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20',
    accentColor: '#ef4444',
    gradient: 'from-red-500/10 via-slate-50 to-white dark:from-red-500/20 dark:via-slate-900 dark:to-slate-950',
  },
  'critical-appraisal': {
    id: 'critical-appraisal',
    name: 'Critical Appraisal',
    slug: 'critical-appraisal',
    description: 'Methodological breakdown of landmark EM trials, PICO analyses, biostatistics, and RCT evaluations.',
    iconName: 'FileText',
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 hover:bg-cyan-500/20',
    accentColor: '#06b6d4',
    gradient: 'from-cyan-500/10 via-slate-50 to-white dark:from-cyan-500/20 dark:via-slate-900 dark:to-slate-950',
  },
  'cesr-portfolio': {
    id: 'cesr-portfolio',
    name: 'CESR / Portfolio Pathway',
    slug: 'cesr-portfolio',
    description: 'Guidance, SLO evidence mapping, audit templates, and portfolio strategies for EM specialist registration.',
    iconName: 'Award',
    badgeColor: 'border-purple-500/30 bg-purple-500/10 text-purple-700 dark:text-purple-400 hover:bg-purple-500/20',
    accentColor: '#8b5cf6',
    gradient: 'from-purple-500/10 via-slate-50 to-white dark:from-purple-500/20 dark:via-slate-900 dark:to-slate-950',
  },
  'blog': {
    id: 'blog',
    name: 'Blog',
    slug: 'blog',
    description: 'Field notes, human factors, resuscitation leadership, FOAMed reflections, and department insights.',
    iconName: 'BookOpen',
    badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/20',
    accentColor: '#10b981',
    gradient: 'from-emerald-500/10 via-slate-50 to-white dark:from-emerald-500/20 dark:via-slate-900 dark:to-slate-950',
  },
};

export const SECTION_KEYS = Object.keys(SECTIONS) as [string, ...string[]];

export function getSectionConfig(sectionId: string): SectionConfig | undefined {
  return SECTIONS[sectionId];
}
