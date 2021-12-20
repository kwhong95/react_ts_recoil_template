import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { loadingState } from '../state/loadingState';

const useLoading = ({
  id, 
  shouldShowLoading 
}: { 
  id: string; 
  shouldShowLoading: boolean; 
}) => {
  const setLoaing = useSetRecoilState(loadingState);

  useEffect(() => {
    const removeLoaingState = () => {
      setLoaing((oldLoading) => {
        const { [id]: _removed, ...updateLoading } = oldLoading;
        return updateLoading;
      });
    };

    if (shouldShowLoading) {
      setLoaing((oldLoading) => ({
        ...oldLoading,
        [id]: id,
      }));
    } else {
      removeLoaingState();
    }

    // if component unmounts while in loading state,we need to make
    // sure we cleanup with `useEffect` unsubscribe (end loading state)
    
    return () => {
      removeLoaingState();
    };
  }, [shouldShowLoading, id, setLoaing]);
};

export default useLoading;