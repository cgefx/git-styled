import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
	buildChart,
	languageColors,
	backgroundColor,
	borderColor,
} from '../../utils';

const Charts = ({ langData, repoData }) => {
	const [langChartData, setLangChartData] = useState(null);

	const initLangChart = () => {
		const ctx = document.getElementById('langChart');
		const labels = langData.map(lang => lang.label);
		const data = langData.map(lang => lang.value);

		setLangChartData(data);

		if (data.length > 0) {
			const backgroundColor = langData.map(
				({ color }) =>
					`#${
						color.length > 4
							? color.slice(1)
							: color.slice(1).repeat(2)
					}B3`,
			);
			const borderColor = langData.map(lang => `${lang.color}`);
			const chartType = 'pie';
			const axes = false;
			const legend = true;
			const config = {
				ctx,
				chartType,
				labels,
				data,
				backgroundColor,
				borderColor,
				axes,
				legend,
			};
			buildChart(config);
		}
	};

	useEffect(() => {
		if (langData.length && repoData.length) {
			initLangChart();
		}
	}, []);

	const chartSize = 240;
	const langChartError = !(langChartData && langChartData.length > 0);

	return (
		<div className='chart'>
			<div className='chart__inner'>
				<header className='chart__header'>
					<h2>Top Languages</h2>
				</header>

				<div className='chart__canvas'>
					{langChartError && <p>No chart data to show</p>}
					<canvas
						id='langChart'
						width={chartSize}
						height={chartSize}
					></canvas>
				</div>
			</div>
		</div>
	);
};

Charts.propTypes = {
	langData: PropTypes.array.isRequired,
	repoData: PropTypes.array.isRequired,
};

export default Charts;
