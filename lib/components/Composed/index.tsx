import { useState } from 'react';
import { Input } from '#lib/Input';

export function Composed(props: React.HTMLAttributes<HTMLDivElement>) {
  const [value, setValue] = useState('');
  return (
    <div {...props}>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
