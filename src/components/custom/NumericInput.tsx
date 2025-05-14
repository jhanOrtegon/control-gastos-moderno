import { Input } from '@/components/ui/input';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import * as React from 'react';

interface NumericInputProps
  extends Omit<
    NumericFormatProps,
    'onChange' | 'onValueChange' | 'customInput' | 'value'
  > {
  value?: number;
  onChange: (value: number | undefined) => void;
  prefix?: string;
  decimalPlaces?: number;
}

export function NumericInput({
  value,
  onChange,
  prefix,
  decimalPlaces = 0,
  ...props
}: NumericInputProps) {
  return (
    <div className='relative w-full'>
      {prefix && (
        <span className='text-muted-foreground pointer-events-none absolute top-1/2 left-3 z-10 -translate-y-1/2 pr-8 text-sm'>
          {prefix}
        </span>
      )}

      <NumericFormat
        value={value}
        decimalScale={decimalPlaces}
        fixedDecimalScale
        thousandSeparator='.'
        decimalSeparator=','
        allowNegative={false}
        allowLeadingZeros={false}
        onValueChange={(values) => {
          onChange(values.floatValue ?? undefined);
        }}
        customInput={Input}
        style={{ paddingLeft: 25 }}
        {...props}
      />
    </div>
  );
}
