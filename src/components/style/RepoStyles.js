import styled from 'styled-components';

export const ReposHeader = styled.header`
	display: flex;
	align-items: center;
	margin-bottom: 2.2rem;

	h2 {
		font-size: 1.75rem;
		margin: 0;
		padding-bottom: 0.5rem;
		border-bottom: 1px dashed ${({ theme }) => theme.primary};
	}
`;

export const RepoGrid = styled.div`
	margin: 0 auto;
	padding: 0;
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-gap: 1.6rem;

		li {
			.repo {
				display: flex;
				justify-content: space-between;
				flex-direction: column;
				padding: 2rem;
				height: 100%;
				margin: 0 auto;
				color: ${({ theme }) => theme.textSecondary};
				background-color: ${({ theme }) => theme.backgroundMedium};
				border-radius: var(--border-radius);
				box-shadow: var(--shadow-low);
				transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1) 0s;

				&:hover,
				&:focus {
					box-shadow: var(--shadow-hover);
				}

				h3 {
					color: ${({ theme }) => theme.textPrimary};

					font-size: 1.6rem;
					letter-spacing: -0.5px;
				}
				p {
					font-size: 1.2rem;
					margin-bottom: 2rem;
					color: ${({ theme }) => theme.textSecondary};
				}
				&__header {
					margin-bottom: 2rem;
				}
				&__name {
					display: flex;
					align-items: center;
					margin-bottom: 0.5rem;
					svg {
						margin-right: 0.8rem;
						min-width: 1.6rem;
						color: ${({ theme }) => theme.primary};
					}
					h3 {
						margin: 0;
					}
				}
				&__stats {
					display: flex;
					justify-content: space-between;
					font-size: 13px;
					color: ${({ theme }) => theme.textSecondary};

					&--left {
						flex-grow: 1;
						display: flex;

						span {
							display: flex;
							align-items: center;
							margin-right: 0.75rem;

							svg {
								margin-right: 0.25rem;
							}
							.language {
								border-radius: 100%;
								width: 10px;
								height: 10px;
								margin-right: 0.25rem;
							}
						}
					}
				}
			}
		}
	}
`;
