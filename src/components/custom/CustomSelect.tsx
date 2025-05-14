import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { type FC } from 'react';

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  value: string | null;
  onChange: (value: string | null) => void;
  options: Option[];
  placeholder?: string;
  side?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  triggerClassName?: string;
  showNoneOption?: boolean;
  noneLabel?: string;
  noneValue?: string; // valor que representa "sin selección"
}

export const CustomSelect: FC<CustomSelectProps> = ({
  value,
  onChange,
  options,
  placeholder = 'Seleccionar...',
  side = 'bottom',
  className,
  triggerClassName,
  showNoneOption = true,
  noneLabel = '— Ninguno —',
  noneValue = '__none__'
}) => {
  const handleChange = (newValue: string) => {
    if (showNoneOption && newValue === noneValue) {
      onChange(null);
    } else {
      onChange(newValue);
    }
  };

  const effectiveValue = value ?? noneValue;

  const enhancedOptions = showNoneOption
    ? [{ label: noneLabel, value: noneValue }, ...options]
    : options;

  return (
    <Select value={effectiveValue} onValueChange={handleChange}>
      <SelectTrigger className={cn('h-9 w-full', triggerClassName)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent side={side} className={className}>
        {enhancedOptions.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
