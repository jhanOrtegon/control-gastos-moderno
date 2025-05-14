import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import NewTrainingDialog from './new-training-dialog';

export default function TrainingViewPage() {
  return (
    <PageContainer>
      <div className='space-y-4'>
        <div className='flex items-start justify-between'>
          <Heading
            title={`Capacitaciones`}
            description='Creación de formularios de capacitaciones'
          />
          <NewTrainingDialog />
        </div>
      </div>
    </PageContainer>
  );
}
