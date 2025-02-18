import { ErrorContainer, ErrorMessage, RetryButton } from './styles'

interface ErrorViewProps {
  message: string;
  onRetry: () => void;
}

export function ErrorView({ message, onRetry }: ErrorViewProps) {
  return (
    <ErrorContainer>
      <ErrorMessage>
        {message}
      </ErrorMessage>
      <RetryButton onClick={onRetry}>
        REINTENTAR
      </RetryButton>
    </ErrorContainer>
  )
} 