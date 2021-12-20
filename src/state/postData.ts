import { atom, useRecoilState } from 'recoil';
import { useQuery } from '@apollo/react-hooks';
import { GET_POSTS } from '../services/query';
import useLoading from '../utils/useLoading';

const postDataState = atom({
  default: [],
  key: 'postData',
});

const usePostData = ({ 
  loadingId 
}: { 
  loadingId: string 
}) => {
  const [postData, setPostData] = useRecoilState(postDataState);
  const { data, error, loading, refetch } = useQuery(GET_POSTS);

  useLoading({ 
    id: loadingId,
    shouldShowLoading: loading,
  });

  setPostData(data);

  return { postData, error, loading, refetch };
}

export default usePostData;