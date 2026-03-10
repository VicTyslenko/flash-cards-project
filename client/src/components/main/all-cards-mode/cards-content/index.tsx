import { useStoreDispatch } from "../../../../hooks";

import { DefaultButton } from "../../../../shared/default-button";
import { loadMoreCards } from "../../../../slices/cards/cardsSlice";
import type { Card } from "../../../../slices/cards/models";
import { DefaultCard } from "./extensions/default-card";

import * as S from "./styles";

type Props = {
  data: Card[];
  hasMore: boolean;
  isLoading: boolean;
};

export const CardsContent = ({ data, hasMore, isLoading }: Props) => {
  const dispatch = useStoreDispatch();

  const handleLoadMore = () => {
    if (!hasMore) return;
    dispatch(loadMoreCards());
  };

  return (
    <>
      <S.CardsContentWrapp>
        {isLoading ? (
          <S.LoadingWrapper>
            <S.LoadingSpinner />
            <S.LoadingText>Loading cards...</S.LoadingText>
          </S.LoadingWrapper>
        ) : (
          data && data.map((card) => <DefaultCard key={card.id} card={card} />)
        )}
        {!isLoading && (
          <S.ButtonWrapp>
            {!isLoading && hasMore && (
              <DefaultButton onClick={handleLoadMore}>Load more</DefaultButton>
            )}
          </S.ButtonWrapp>
        )}
      </S.CardsContentWrapp>
    </>
  );
};
