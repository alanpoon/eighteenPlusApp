/**
 * Copyright 2019 Centrality Investments Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Styled from 'styled-components';
import { StyleSheet } from 'react-native';

export const Container = Styled.View`
  border-bottom-width: ${StyleSheet.hairlineWidth};
  border-color: #ddd;
  padding: 10px 0px;
`;

export const Title = Styled.Text`
  font-size: 18px;
  color: #3d3d3d;
  font-weight: 500;
  margin-bottom: 20px;
`;
