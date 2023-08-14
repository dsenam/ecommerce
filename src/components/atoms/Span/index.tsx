
import { SpanStyled } from "./styles";

interface SpanProps {
  label: string;
  error?: boolean
}

const Span = ({ label, error = false }: SpanProps) => {
  return <SpanStyled $error={error}>{label}</SpanStyled>;
};

export default Span;
