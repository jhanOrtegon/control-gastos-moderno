import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { type FC } from 'react';

interface DatePickerPopoverProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  placeholder?: string;
  buttonClassName?: string;
  contentClassName?: string;
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'destructive'; // depende de tu theme
  icon?: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  size?: 'sm' | 'md' | 'lg' | 'full-width';
}

export const CustomDatePicker: FC<DatePickerPopoverProps> = ({
  date,
  setDate,
  placeholder = 'Selecciona fecha',
  buttonClassName,
  contentClassName = 'w-auto p-0',
  variant = 'outline',
  icon = <CalendarIcon className='mr-2 h-4 w-4' />,
  align = 'start',
  size = 'full-width'
}) => {
  const sizeClass = {
    sm: 'w-[180px]',
    md: 'w-[240px]',
    lg: 'w-[300px]',
    ['full-width']: 'w-full'
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={variant}
          className={cn(
            sizeClass[size],
            'justify-start text-left font-normal',
            !date && 'text-muted-foreground',
            buttonClassName
          )}
        >
          {icon}
          {date ? format(date, 'PPP') : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={contentClassName} align={align}>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
