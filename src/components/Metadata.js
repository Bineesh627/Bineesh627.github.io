import { useMetadata } from '../hooks/useMetadata';

/**
 * Declarative component for setting page metadata.
 * Use it anywhere in your component tree like:
 * `<Metadata title="My Page" description="A custom description" />`
 */
export const Metadata = (props) => {
  useMetadata(props);
  return null;
};

export default Metadata;
