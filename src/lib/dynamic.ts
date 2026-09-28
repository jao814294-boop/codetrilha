import { lazy, ReactNode, Suspense } from 'react';

interface DynamicOptions {
  loading?: () => ReactNode;
  ssr?: boolean;
}

export default function dynamic(
  importFunc: () => Promise<{ default: React.ComponentType<any> }>,
  options?: DynamicOptions
) {
  const DynamicComponent = lazy(importFunc);

  return (props: any) => (
    <Suspense fallback={options?.loading ? options.loading() : <div />}>
      <DynamicComponent {...props} />
    </Suspense>
  );
}
