import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const FeedbackChart = ({ feedbacks }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (!feedbacks || feedbacks.length === 0) return;

    const svg = d3.select(chartRef.current);
    svg.selectAll('*').remove(); // Clear the previous chart

    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };

    const x = d3.scaleBand()
      .domain(feedbacks.map(d => d.event.title))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(feedbacks, d => d.count)]).nice()
      .range([height - margin.bottom, margin.top]);

    const xAxis = g => g
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSizeOuter(0));

    const yAxis = g => g
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    svg.append('g')
      .selectAll('rect')
      .data(feedbacks)
      .join('rect')
        .attr('x', d => x(d.event.title))
        .attr('y', d => y(d.count))
        .attr('height', d => y(0) - y(d.count))
        .attr('width', x.bandwidth())
        .attr('fill', 'steelblue');

    svg.append('g')
      .call(xAxis);

    svg.append('g')
      .call(yAxis);

  }, [feedbacks]);

  return (
    <svg
      ref={chartRef}
      width="500"
      height="300"
    ></svg>
  );
};

export default FeedbackChart;
