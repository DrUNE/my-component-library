import { useState } from 'react';
import { Input } from '#lib/Input';
import { Button } from '#lib/Button';

export function Composed(props: React.HTMLAttributes<HTMLDivElement>) {
  const [value, setValue] = useState('');
  return (
    <div {...props}>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button data-componet-size="l">{value}</Button>
    </div>
  );
}
