import {Component, OnInit, Input} from '@angular/core';
import * as d3 from 'd3';

import { ChannelList } from '../core/models/channel-list';
import { Item } from '../core/models/item';
import { Channel } from '../core/models/channel';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  @Input() feedOutput: Channel;
  @Input() selectedNotification: Item;

  private numberOfChannels: number;
  private symbols: string;
  public data;

  width = 450;
  height = 450;
  margin = 40;
  radius;
  svg;
  color;
  pie;
  dataReady;
  arcGenerator;

  constructor() {}

  ngOnInit() {
    this.numberOfChannels = ChannelList.length;
  }

  getPieChart() {
    if (this.selectedNotification) {
      this.symbols = this.selectedNotification.title + this.selectedNotification.description + this.selectedNotification.pubDate;
      this.symbols = this.symbols.toLocaleLowerCase();
    }

    function getFrequency(str) {
      const regexp = /[a-z]/;

      return str
      .split('')
      .filter((char) => regexp.test(char))
      .reduce( (prev, curr) => {
        prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
        return prev;
      }, {});
    }

    this.data = getFrequency(this.symbols);
    console.log('data: ', getFrequency(this.symbols));

    this.draw();
  }

  draw() {

    this.radius = Math.min(this.width, this.height) / 2 - this.margin;

    this.svg = d3.select('#pie-chart')
    .append('svg')
    .attr('width', this.width)
    .attr('height', this.height)
    .append('g')
    .attr('transform', 'translate(' + this.width / 2 + ',' +
      this.height / 2 + ')');

    // set the color scale
    this.color = d3.scaleOrdinal()
    .domain(Object.keys(this.data))
    .range(d3.schemeDark2);

    // Compute the position of each group on the pie:
    this.pie = d3.pie()
    .value( (d) => d.value );

    this.dataReady = this.pie(d3.entries(this.data));

    // Build the pie chart
    this.svg
    .selectAll('whatever')
    .data(this.dataReady)
    .enter()
    .append('path')
    .attr('d', d3.arc()
    .innerRadius(0)         // This is the size of the donut hole
    .outerRadius(this.radius))
    .attr('fill', (d) => (this.color(d.data.key)))
    .attr('stroke', 'black')
    .style('stroke-width', '2px')
    .style('opacity', 0.7);

    this.arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(this.radius);

    // Now add the annotation
    this.svg
      .selectAll('whatever')
      .data(this.dataReady)
      .enter()
      .append('text')
      .text( (d) =>  d.data.key )
      .attr( 'transform', (d) =>  'translate(' + this.arcGenerator.centroid(d) + ')'  )
      .style('text-anchor', 'middle')
      .style('font-size', 17);
  }


}
