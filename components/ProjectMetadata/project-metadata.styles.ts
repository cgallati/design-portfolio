import styled from "@emotion/styled";

export const MetadataWrapper = styled.section`
  margin: 73px 0;
  border-top: solid rgba(0, 0, 0, 0.3) 1px;
  display: flex;
  flex-direction: row;
`;

export const MetadataDescriptionWrapper = styled.div`
  width: 50%;
  margin-top: 1rem;
`;

export const MetadataDescription = styled.h3`
  max-width: 660px;
  color: #131313;
  font-family: Poppins, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 53px; /* 165.625% */
`;

export const MetadataItemsWrapper = styled.div`
  width: 50%;
`;

export const MetadataItemsKey = styled.p`
  margin-top: 25px;
  color: #b0b0b0;
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 31px; /* 155% */
`;

export const MetadataItemsValue = styled.p`
  color: #404040;
  margin-top: 11px;
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 31px; /* 155% */
`;

export const MetadataItemDivider = styled.div<{ inView?: boolean }>`
  height: 1px;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  margin-top: 2rem;
`;
