import { EmptyContainer, EmptyMessage } from './styles'

interface EmptyStateProps {
  message: string;
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <EmptyContainer>
      <EmptyMessage>
        {message}
      </EmptyMessage>
    </EmptyContainer>
  )
} 