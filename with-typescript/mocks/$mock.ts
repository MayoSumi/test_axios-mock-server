/* eslint-disable */
import { AxiosInstance } from 'axios'
import mockServer from 'axios-mock-server'
import mock0 from './users/_userId'

export default (client?: AxiosInstance) => mockServer([
  {
    path: '/users/_userId',
    methods: mock0
  }
], client, '')
