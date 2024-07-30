'use client';

import { ROUTES } from '@/constants/api';
import { VideoProps } from '@/types/video';
import { fetchApi } from '@/utils/fetch';
import { useQuery } from '@tanstack/react-query';

export const useGetVideos = () => {
  // TODO: we can (must) add pagination here
  const { data, isLoading, isError } = useQuery({
    queryKey: ['videos'],
    queryFn: async () => {
      const response = await fetchApi<VideoProps[]>(ROUTES.VIDEOS.ALL_VIDEOS);

      if (response.isError()) {
        throw new Error(response.error.message);
      }

      return response.data;
    },
  });

  return { data, isLoading, isError };
};
