import { useCallback, useState } from 'react';
import { useReactFlow } from 'reactflow';

export function NodeCounter() {
  const reactFlow = useReactFlow();
  const [count, setCount] = useState(0);
  const countNodes = useCallback(() => {
    setCount(reactFlow.getNodes().length);
    // you need to pass it as a dependency if you are using it with useEffect or useCallback
    // because at the first render, it's not initialized yet and some functions might not work.
  }, [reactFlow]);

  return (
    <div>
      <button onClick={countNodes}>Update count</button>
      <p>There are {count} nodes in the flow.</p>
    </div>
  );
}
