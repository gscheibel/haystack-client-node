/*
 *  Copyright 2018 Expedia, Inc.
 *
 *       Licensed under the Apache License, Version 2.0 (the "License");
 *       you may not use this file except in compliance with the License.
 *      You may obtain a copy of the License at
 *
 *           http://www.apache.org/licenses/LICENSE-2.0
 *
 *       Unless required by applicable law or agreed to in writing, software
 *       distributed under the License is distributed on an "AS IS" BASIS,
 *       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *       See the License for the specific language governing permissions and
 *       limitations under the License.
 */

import SpanContext from './span_context';
import Span from './span';
import Tracer from './tracer';

import NoopDispatcher from './dispatchers/noop';
import InMemoryDispatcher from './dispatchers/in_memory';
import FileDispatcher from './dispatchers/file';
import AgentDispatcher from './dispatchers/grpc_agent';
import HttpCollectorDispatcher from './dispatchers/http_collector';
import { DispatcherConfig } from './dispatchers/dispatcher-config';
import Configuration from './configuration';
import { Logger } from './logger';
import { TracerConfig } from './tracer-config';
import PropagationRegistry from './propagators/propagation_registry';
import { PropagatorOpts } from './propagators/propagator';

import * as opentracing from 'opentracing';
import TextMapPropagator from './propagators/textmap_propagator';
import DefaultCodex from './propagators/default_codex';

export {
    Configuration,
    TracerConfig,
    Tracer,
    SpanContext,
    Span,
    NoopDispatcher,
    InMemoryDispatcher,
    FileDispatcher,
    AgentDispatcher,
    HttpCollectorDispatcher,
    DispatcherConfig,
    opentracing,
    Logger,
    PropagationRegistry,
    PropagatorOpts,
    TextMapPropagator,
    DefaultCodex
};

module.exports = {
    Configuration,
    initTracer: Tracer.initTracer,
    SpanContext,
    Span,
    Tracer,
    NoopDispatcher,
    InMemoryDispatcher,
    FileDispatcher,
    AgentDispatcher,
    opentracing,
    PropagationRegistry,
    PropagatorOpts,
    TextMapPropagator,
    DefaultCodex
};
