import styled from 'styled-components';

export const DropdownStyles = styled.div`
	display: flex;
	align-items: center;
	font-size: 1rem;

	span {
		margin: 0 1rem;
	}

	.dropdown {
		position: relative;
		width: 100px;
		font-size: 1.4rem;
		font-weight: 500;

		&__button {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			font-size: 1.4rem;
			font-weight: 500;
			line-height: 1;
			text-align: left;
			color: ${({ theme }) => theme.primary};
			background-color: transparent;
			border: 1px solid ${({ theme }) => theme.primary};
			padding: 0.8rem;
			border-radius: 5px;

			&:hover,
			&:focus {
				color: ${({ theme }) => theme.primary};
				background: ${({ theme }) => theme.secondary};
				border-color: ${({ theme }) => theme.secondary};
			}

			label {
				transition: var(--transition-main);
				cursor: pointer;
			}
		}

		&__list {
			position: absolute;
			overflow: hidden;
			width: 100%;
			z-index: 2;
			transition: var(--transition-main);
			box-shadow: var(--shadow-low);
			opacity: 1;

			&:active {
				opacity: 1;
				visibility: visible;
			}
		}

		&__list-item {
			border-radius: 0;
			transition: var(--transition-main);
			&:hover,
			&:focus {
				background-color: ${({ theme }) => theme.textSecondary};
			}
			&:first-of-type {
				button {
					border-top-left-radius: 5px;
					border-top-right-radius: 5px;
				}
			}
			&:last-of-type {
				button {
					border-bottom-left-radius: 5px;
					border-bottom-right-radius: 5px;
				}
			}
			button {
				color: ${({ theme }) => theme.primary};
				background: ${({ theme }) => theme.secondary};
				padding: 10px 7px;
				width: 100%;
				font-size: 14px;
				font-weight: 500;
				line-height: 1;
				text-align: left;
			}
		}
	}
`;
