--
-- PostgreSQL database dump
--

\restrict lq1eKZqWYrtuDB5SI8lv2USu1PAm6hBMDtdhvHss4fcV6IGiCv19iRw22wgkTpT

-- Dumped from database version 17.8 (6108b59)
-- Dumped by pg_dump version 18.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: neondb_owner
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO neondb_owner;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: neondb_owner
--

COMMENT ON SCHEMA public IS '';


--
-- Name: enum_contacts_contacts_type; Type: TYPE; Schema: public; Owner: neondb_owner
--

CREATE TYPE public.enum_contacts_contacts_type AS ENUM (
    'copy',
    'link'
);


ALTER TYPE public.enum_contacts_contacts_type OWNER TO neondb_owner;

--
-- Name: enum_works_link_target; Type: TYPE; Schema: public; Owner: neondb_owner
--

CREATE TYPE public.enum_works_link_target AS ENUM (
    '_self',
    '_blank'
);


ALTER TYPE public.enum_works_link_target OWNER TO neondb_owner;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: ai_practices; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.ai_practices (
    id integer NOT NULL,
    hero_title character varying DEFAULT ''::character varying NOT NULL,
    hero_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    ai_content_title character varying DEFAULT ''::character varying NOT NULL,
    ai_content_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    ai_video_title character varying DEFAULT ''::character varying NOT NULL,
    ai_video_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    ai_video_image_id integer,
    ai_video_demo_video_id integer,
    ai_prototyping_title character varying DEFAULT ''::character varying NOT NULL,
    ai_prototyping_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    meta_title character varying,
    meta_description character varying,
    meta_image_id integer,
    updated_at timestamp(3) with time zone,
    created_at timestamp(3) with time zone
);


ALTER TABLE public.ai_practices OWNER TO neondb_owner;

--
-- Name: ai_practices_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.ai_practices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ai_practices_id_seq OWNER TO neondb_owner;

--
-- Name: ai_practices_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.ai_practices_id_seq OWNED BY public.ai_practices.id;


--
-- Name: ai_practices_rels; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.ai_practices_rels (
    id integer NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path character varying NOT NULL,
    media_id integer
);


ALTER TABLE public.ai_practices_rels OWNER TO neondb_owner;

--
-- Name: ai_practices_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.ai_practices_rels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ai_practices_rels_id_seq OWNER TO neondb_owner;

--
-- Name: ai_practices_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.ai_practices_rels_id_seq OWNED BY public.ai_practices_rels.id;


--
-- Name: buy_home; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.buy_home (
    id integer NOT NULL,
    hero_title character varying DEFAULT ''::character varying NOT NULL,
    hero_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    process_title character varying DEFAULT ''::character varying NOT NULL,
    process_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    process_iframe character varying DEFAULT ''::character varying NOT NULL,
    process_image_id integer,
    analysis_title character varying DEFAULT ''::character varying NOT NULL,
    analysis_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    analysis_iframe character varying DEFAULT ''::character varying NOT NULL,
    strategy_title character varying DEFAULT ''::character varying NOT NULL,
    strategy_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    strategy_iframe character varying DEFAULT ''::character varying NOT NULL,
    exploration_title character varying DEFAULT ''::character varying NOT NULL,
    exploration_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    exploration_image_id integer,
    final_designs_title character varying DEFAULT ''::character varying NOT NULL,
    final_designs_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    outcome_title character varying DEFAULT ''::character varying NOT NULL,
    outcome_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    reflections_title character varying DEFAULT ''::character varying NOT NULL,
    reflections_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    meta_title character varying,
    meta_description character varying,
    meta_image_id integer,
    updated_at timestamp(3) with time zone,
    created_at timestamp(3) with time zone
);


ALTER TABLE public.buy_home OWNER TO neondb_owner;

--
-- Name: buy_home_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.buy_home_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.buy_home_id_seq OWNER TO neondb_owner;

--
-- Name: buy_home_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.buy_home_id_seq OWNED BY public.buy_home.id;


--
-- Name: buy_home_rels; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.buy_home_rels (
    id integer NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path character varying NOT NULL,
    media_id integer,
    works_id integer
);


ALTER TABLE public.buy_home_rels OWNER TO neondb_owner;

--
-- Name: buy_home_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.buy_home_rels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.buy_home_rels_id_seq OWNER TO neondb_owner;

--
-- Name: buy_home_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.buy_home_rels_id_seq OWNED BY public.buy_home_rels.id;


--
-- Name: car_comparison; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.car_comparison (
    id integer NOT NULL,
    hero_title character varying DEFAULT ''::character varying NOT NULL,
    hero_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    opportunity_title character varying DEFAULT ''::character varying NOT NULL,
    opportunity_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    opportunity_iframe character varying DEFAULT ''::character varying NOT NULL,
    problem_title character varying DEFAULT ''::character varying NOT NULL,
    problem_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    problem_image_id integer,
    problem_video_id integer,
    hypothesis_title character varying DEFAULT ''::character varying NOT NULL,
    hypothesis_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    exploration_title character varying DEFAULT ''::character varying NOT NULL,
    exploration_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    exploration_iframe character varying DEFAULT ''::character varying NOT NULL,
    floor_testing_title character varying DEFAULT ''::character varying NOT NULL,
    floor_testing_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    floor_testing_image_id integer,
    floor_testing_redirect_image_id integer,
    final_designs_title character varying DEFAULT ''::character varying NOT NULL,
    final_designs_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    outcome_title character varying DEFAULT ''::character varying NOT NULL,
    outcome_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    reflections_title character varying DEFAULT ''::character varying NOT NULL,
    reflections_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    meta_title character varying,
    meta_description character varying,
    meta_image_id integer,
    updated_at timestamp(3) with time zone,
    created_at timestamp(3) with time zone
);


ALTER TABLE public.car_comparison OWNER TO neondb_owner;

--
-- Name: car_comparison_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.car_comparison_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.car_comparison_id_seq OWNER TO neondb_owner;

--
-- Name: car_comparison_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.car_comparison_id_seq OWNED BY public.car_comparison.id;


--
-- Name: car_comparison_rels; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.car_comparison_rels (
    id integer NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path character varying NOT NULL,
    media_id integer,
    works_id integer
);


ALTER TABLE public.car_comparison_rels OWNER TO neondb_owner;

--
-- Name: car_comparison_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.car_comparison_rels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.car_comparison_rels_id_seq OWNER TO neondb_owner;

--
-- Name: car_comparison_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.car_comparison_rels_id_seq OWNED BY public.car_comparison_rels.id;


--
-- Name: clear_trip; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.clear_trip (
    id integer NOT NULL,
    hero_title character varying DEFAULT ''::character varying NOT NULL,
    problem_title character varying DEFAULT ''::character varying NOT NULL,
    problem_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    challenge_title character varying DEFAULT ''::character varying NOT NULL,
    challenge_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    impact_title character varying DEFAULT ''::character varying NOT NULL,
    impact_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    impact_redirect_link character varying DEFAULT ''::character varying NOT NULL,
    meta_title character varying,
    meta_description character varying,
    meta_image_id integer,
    updated_at timestamp(3) with time zone,
    created_at timestamp(3) with time zone
);


ALTER TABLE public.clear_trip OWNER TO neondb_owner;

--
-- Name: clear_trip_hero_tags; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.clear_trip_hero_tags (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id character varying NOT NULL,
    keyword character varying NOT NULL
);


ALTER TABLE public.clear_trip_hero_tags OWNER TO neondb_owner;

--
-- Name: clear_trip_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.clear_trip_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.clear_trip_id_seq OWNER TO neondb_owner;

--
-- Name: clear_trip_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.clear_trip_id_seq OWNED BY public.clear_trip.id;


--
-- Name: clear_trip_rels; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.clear_trip_rels (
    id integer NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path character varying NOT NULL,
    media_id integer
);


ALTER TABLE public.clear_trip_rels OWNER TO neondb_owner;

--
-- Name: clear_trip_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.clear_trip_rels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.clear_trip_rels_id_seq OWNER TO neondb_owner;

--
-- Name: clear_trip_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.clear_trip_rels_id_seq OWNED BY public.clear_trip_rels.id;


--
-- Name: contacts; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.contacts (
    id integer NOT NULL,
    content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    updated_at timestamp(3) with time zone,
    created_at timestamp(3) with time zone
);


ALTER TABLE public.contacts OWNER TO neondb_owner;

--
-- Name: contacts_contacts; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.contacts_contacts (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id character varying NOT NULL,
    name character varying NOT NULL,
    href character varying NOT NULL,
    type public.enum_contacts_contacts_type NOT NULL
);


ALTER TABLE public.contacts_contacts OWNER TO neondb_owner;

--
-- Name: contacts_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.contacts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.contacts_id_seq OWNER TO neondb_owner;

--
-- Name: contacts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.contacts_id_seq OWNED BY public.contacts.id;


--
-- Name: ec_times; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.ec_times (
    id integer NOT NULL,
    hero_title character varying DEFAULT ''::character varying NOT NULL,
    problem_title character varying DEFAULT ''::character varying NOT NULL,
    problem_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    challenge_title character varying DEFAULT ''::character varying NOT NULL,
    challenge_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    impact_title character varying DEFAULT ''::character varying NOT NULL,
    impact_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    impact_redirect_link character varying DEFAULT ''::character varying NOT NULL,
    meta_title character varying,
    meta_description character varying,
    meta_image_id integer,
    updated_at timestamp(3) with time zone,
    created_at timestamp(3) with time zone
);


ALTER TABLE public.ec_times OWNER TO neondb_owner;

--
-- Name: ec_times_hero_tags; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.ec_times_hero_tags (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id character varying NOT NULL,
    keyword character varying NOT NULL
);


ALTER TABLE public.ec_times_hero_tags OWNER TO neondb_owner;

--
-- Name: ec_times_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.ec_times_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ec_times_id_seq OWNER TO neondb_owner;

--
-- Name: ec_times_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.ec_times_id_seq OWNED BY public.ec_times.id;


--
-- Name: ec_times_rels; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.ec_times_rels (
    id integer NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path character varying NOT NULL,
    media_id integer
);


ALTER TABLE public.ec_times_rels OWNER TO neondb_owner;

--
-- Name: ec_times_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.ec_times_rels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ec_times_rels_id_seq OWNER TO neondb_owner;

--
-- Name: ec_times_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.ec_times_rels_id_seq OWNED BY public.ec_times_rels.id;


--
-- Name: home; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.home (
    id integer NOT NULL,
    hero_title character varying DEFAULT 'Utkarsh Raj'::character varying NOT NULL,
    hero_subtitle character varying DEFAULT 'Senior Product Designer'::character varying NOT NULL,
    hero_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    info_left_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    info_right_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    info_image_id integer NOT NULL,
    meta_title character varying,
    meta_description character varying,
    meta_image_id integer,
    updated_at timestamp(3) with time zone,
    created_at timestamp(3) with time zone
);


ALTER TABLE public.home OWNER TO neondb_owner;

--
-- Name: home_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.home_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.home_id_seq OWNER TO neondb_owner;

--
-- Name: home_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.home_id_seq OWNED BY public.home.id;


--
-- Name: home_rels; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.home_rels (
    id integer NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path character varying NOT NULL,
    media_id integer,
    works_id integer
);


ALTER TABLE public.home_rels OWNER TO neondb_owner;

--
-- Name: home_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.home_rels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.home_rels_id_seq OWNER TO neondb_owner;

--
-- Name: home_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.home_rels_id_seq OWNED BY public.home_rels.id;


--
-- Name: media; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.media (
    id integer NOT NULL,
    alt character varying NOT NULL,
    thumbnail_id integer,
    prefix character varying DEFAULT ''::character varying,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    url character varying,
    thumbnail_u_r_l character varying,
    filename character varying,
    mime_type character varying,
    filesize numeric,
    width numeric,
    height numeric,
    focal_x numeric,
    focal_y numeric,
    sizes_preview_url character varying,
    sizes_preview_width numeric,
    sizes_preview_height numeric,
    sizes_preview_mime_type character varying,
    sizes_preview_filesize numeric,
    sizes_preview_filename character varying
);


ALTER TABLE public.media OWNER TO neondb_owner;

--
-- Name: media_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.media_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.media_id_seq OWNER TO neondb_owner;

--
-- Name: media_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.media_id_seq OWNED BY public.media.id;


--
-- Name: navlinks; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.navlinks (
    id integer NOT NULL,
    updated_at timestamp(3) with time zone,
    created_at timestamp(3) with time zone
);


ALTER TABLE public.navlinks OWNER TO neondb_owner;

--
-- Name: navlinks_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.navlinks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.navlinks_id_seq OWNER TO neondb_owner;

--
-- Name: navlinks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.navlinks_id_seq OWNED BY public.navlinks.id;


--
-- Name: navlinks_nav_links; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.navlinks_nav_links (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id character varying NOT NULL,
    title character varying NOT NULL,
    href character varying NOT NULL
);


ALTER TABLE public.navlinks_nav_links OWNER TO neondb_owner;

--
-- Name: payload_kv; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.payload_kv (
    id integer NOT NULL,
    key character varying NOT NULL,
    data jsonb NOT NULL
);


ALTER TABLE public.payload_kv OWNER TO neondb_owner;

--
-- Name: payload_kv_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.payload_kv_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payload_kv_id_seq OWNER TO neondb_owner;

--
-- Name: payload_kv_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.payload_kv_id_seq OWNED BY public.payload_kv.id;


--
-- Name: payload_locked_documents; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.payload_locked_documents (
    id integer NOT NULL,
    global_slug character varying,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.payload_locked_documents OWNER TO neondb_owner;

--
-- Name: payload_locked_documents_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.payload_locked_documents_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payload_locked_documents_id_seq OWNER TO neondb_owner;

--
-- Name: payload_locked_documents_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.payload_locked_documents_id_seq OWNED BY public.payload_locked_documents.id;


--
-- Name: payload_locked_documents_rels; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.payload_locked_documents_rels (
    id integer NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path character varying NOT NULL,
    media_id integer,
    users_id integer,
    works_id integer
);


ALTER TABLE public.payload_locked_documents_rels OWNER TO neondb_owner;

--
-- Name: payload_locked_documents_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.payload_locked_documents_rels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payload_locked_documents_rels_id_seq OWNER TO neondb_owner;

--
-- Name: payload_locked_documents_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.payload_locked_documents_rels_id_seq OWNED BY public.payload_locked_documents_rels.id;


--
-- Name: payload_migrations; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.payload_migrations (
    id integer NOT NULL,
    name character varying,
    batch numeric,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.payload_migrations OWNER TO neondb_owner;

--
-- Name: payload_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.payload_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payload_migrations_id_seq OWNER TO neondb_owner;

--
-- Name: payload_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.payload_migrations_id_seq OWNED BY public.payload_migrations.id;


--
-- Name: payload_preferences; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.payload_preferences (
    id integer NOT NULL,
    key character varying,
    value jsonb,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.payload_preferences OWNER TO neondb_owner;

--
-- Name: payload_preferences_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.payload_preferences_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payload_preferences_id_seq OWNER TO neondb_owner;

--
-- Name: payload_preferences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.payload_preferences_id_seq OWNED BY public.payload_preferences.id;


--
-- Name: payload_preferences_rels; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.payload_preferences_rels (
    id integer NOT NULL,
    "order" integer,
    parent_id integer NOT NULL,
    path character varying NOT NULL,
    users_id integer
);


ALTER TABLE public.payload_preferences_rels OWNER TO neondb_owner;

--
-- Name: payload_preferences_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.payload_preferences_rels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payload_preferences_rels_id_seq OWNER TO neondb_owner;

--
-- Name: payload_preferences_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.payload_preferences_rels_id_seq OWNED BY public.payload_preferences_rels.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.users (
    id integer NOT NULL,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    email character varying NOT NULL,
    reset_password_token character varying,
    reset_password_expiration timestamp(3) with time zone,
    salt character varying,
    hash character varying,
    login_attempts numeric DEFAULT 0,
    lock_until timestamp(3) with time zone
);


ALTER TABLE public.users OWNER TO neondb_owner;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO neondb_owner;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users_sessions; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.users_sessions (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id character varying NOT NULL,
    created_at timestamp(3) with time zone,
    expires_at timestamp(3) with time zone NOT NULL
);


ALTER TABLE public.users_sessions OWNER TO neondb_owner;

--
-- Name: works; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.works (
    id integer NOT NULL,
    slug character varying DEFAULT ''::character varying NOT NULL,
    title character varying DEFAULT ''::character varying NOT NULL,
    description jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    image_id integer NOT NULL,
    link_href character varying NOT NULL,
    link_target public.enum_works_link_target DEFAULT '_self'::public.enum_works_link_target,
    updated_at timestamp(3) with time zone DEFAULT now() NOT NULL,
    created_at timestamp(3) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.works OWNER TO neondb_owner;

--
-- Name: works_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.works_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.works_id_seq OWNER TO neondb_owner;

--
-- Name: works_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.works_id_seq OWNED BY public.works.id;


--
-- Name: works_tags; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.works_tags (
    _order integer NOT NULL,
    _parent_id integer NOT NULL,
    id character varying NOT NULL,
    keyword character varying NOT NULL
);


ALTER TABLE public.works_tags OWNER TO neondb_owner;

--
-- Name: ai_practices id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.ai_practices ALTER COLUMN id SET DEFAULT nextval('public.ai_practices_id_seq'::regclass);


--
-- Name: ai_practices_rels id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.ai_practices_rels ALTER COLUMN id SET DEFAULT nextval('public.ai_practices_rels_id_seq'::regclass);


--
-- Name: buy_home id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.buy_home ALTER COLUMN id SET DEFAULT nextval('public.buy_home_id_seq'::regclass);


--
-- Name: buy_home_rels id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.buy_home_rels ALTER COLUMN id SET DEFAULT nextval('public.buy_home_rels_id_seq'::regclass);


--
-- Name: car_comparison id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.car_comparison ALTER COLUMN id SET DEFAULT nextval('public.car_comparison_id_seq'::regclass);


--
-- Name: car_comparison_rels id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.car_comparison_rels ALTER COLUMN id SET DEFAULT nextval('public.car_comparison_rels_id_seq'::regclass);


--
-- Name: clear_trip id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.clear_trip ALTER COLUMN id SET DEFAULT nextval('public.clear_trip_id_seq'::regclass);


--
-- Name: clear_trip_rels id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.clear_trip_rels ALTER COLUMN id SET DEFAULT nextval('public.clear_trip_rels_id_seq'::regclass);


--
-- Name: contacts id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.contacts ALTER COLUMN id SET DEFAULT nextval('public.contacts_id_seq'::regclass);


--
-- Name: ec_times id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.ec_times ALTER COLUMN id SET DEFAULT nextval('public.ec_times_id_seq'::regclass);


--
-- Name: ec_times_rels id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.ec_times_rels ALTER COLUMN id SET DEFAULT nextval('public.ec_times_rels_id_seq'::regclass);


--
-- Name: home id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.home ALTER COLUMN id SET DEFAULT nextval('public.home_id_seq'::regclass);


--
-- Name: home_rels id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.home_rels ALTER COLUMN id SET DEFAULT nextval('public.home_rels_id_seq'::regclass);


--
-- Name: media id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.media ALTER COLUMN id SET DEFAULT nextval('public.media_id_seq'::regclass);


--
-- Name: navlinks id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.navlinks ALTER COLUMN id SET DEFAULT nextval('public.navlinks_id_seq'::regclass);


--
-- Name: payload_kv id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.payload_kv ALTER COLUMN id SET DEFAULT nextval('public.payload_kv_id_seq'::regclass);


--
-- Name: payload_locked_documents id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.payload_locked_documents ALTER COLUMN id SET DEFAULT nextval('public.payload_locked_documents_id_seq'::regclass);


--
-- Name: payload_locked_documents_rels id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.payload_locked_documents_rels ALTER COLUMN id SET DEFAULT nextval('public.payload_locked_documents_rels_id_seq'::regclass);


--
-- Name: payload_migrations id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.payload_migrations ALTER COLUMN id SET DEFAULT nextval('public.payload_migrations_id_seq'::regclass);


--
-- Name: payload_preferences id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.payload_preferences ALTER COLUMN id SET DEFAULT nextval('public.payload_preferences_id_seq'::regclass);


--
-- Name: payload_preferences_rels id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.payload_preferences_rels ALTER COLUMN id SET DEFAULT nextval('public.payload_preferences_rels_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: works id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.works ALTER COLUMN id SET DEFAULT nextval('public.works_id_seq'::regclass);


--
-- Data for Name: ai_practices; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.ai_practices (id, hero_title, hero_content, ai_content_title, ai_content_content, ai_video_title, ai_video_content, ai_video_image_id, ai_video_demo_video_id, ai_prototyping_title, ai_prototyping_content, meta_title, meta_description, meta_image_id, updated_at, created_at) FROM stdin;
1	AI Practices	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Over the past few years, I’ve integrated AI tools into my daily design work. It’s helped me spark new ideas, communicate more effectively, and make sense of complex information. And also turn concepts into real, tangible experiences. I use AI across different domains, from content and imagery to rapid prototyping, enabling me to do more and stay creative sustainably.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	AI + Content	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "AI is embedded in my workflow, not just for drafting, but for structuring ambiguous information, synthesizing feedback patterns, and accelerating iteration. I’ve built custom tooling, including a Figma plug-in powered by GPT and Claude to extract and systematize content strings. While AI expands speed and surface area, judgment, framing, and decision quality remain human-owned.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	AI + Video	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "I built an AI-powered content engine leveraging Google Veo for video generation and Stitch for rapid visual composition. The system translated structured prompts into production-ready content flows, reducing manual editing overhead and accelerating creative turnaround. The focus wasn’t just generation, but controllability, ensuring outputs aligned with narrative intent and product context.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	\N	\N	AI + Prototyping	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "I use AI-native development tools like Vercel, Claude, and Figma Make to move from idea to working software quickly. I build functional flows to test logic, edge cases, and interaction behaviour in real conditions. These newer AI-assisted environments have significantly reduced the gap between concept and executable product. They allow me to iterate faster, validate assumptions earlier, and think directly in systems rather than screens.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	AI Practices	I use AI across different domains, from content and imagery to rapid prototyping, enabling me to do more and stay creative sustainably.	\N	2026-03-06 19:27:47.652+00	2026-03-06 19:22:05.858+00
\.


--
-- Data for Name: ai_practices_rels; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.ai_practices_rels (id, "order", parent_id, path, media_id) FROM stdin;
4	1	1	aiVideo.videos	49
5	2	1	aiVideo.videos	63
\.


--
-- Data for Name: buy_home; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.buy_home (id, hero_title, hero_content, process_title, process_content, process_iframe, process_image_id, analysis_title, analysis_content, analysis_iframe, strategy_title, strategy_content, strategy_iframe, exploration_title, exploration_content, exploration_image_id, final_designs_title, final_designs_content, outcome_title, outcome_content, reflections_title, reflections_content, meta_title, meta_description, meta_image_id, updated_at, created_at) FROM stdin;
1	Optimising mid-funnel conversion	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h4", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "How might we design Spinny’s Buy Homepage as a seamless hub for used-car transaction updates and action management for transactional users?", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Transactional users are those who had already scheduled a test drive or progressed toward booking, were returning to a homepage that did not reflect their stage in the journey.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "The previous UX treated committed users the same as exploratory users and this created ambiguity at a revenue sensitive stage of the funnel.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	Process	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Problem ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Users who scheduled a test drive could not see their transaction stage on the homepage. Visit details, booking status, and next steps were missing, forcing users to check profiles or external messages.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Time-to-Visit (T2V) averaged (48 hours), visit-to-delivery (V2D) had plateaued, and drop-offs peaked between scheduling and showroom visit.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Approach", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Rather than treating this as a visual refresh, I framed it as a lifecycle continuity issue. The core question became: how might we transform the homepage from a discovery surface into a state-aware checkpoint for transactional users?", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	https://www.figma.com/design/kREifhWpJXOrfuRhRkRxQ7/Buy-Home-Page?node-id=26-48&t=IefaVzh04fgtOwqJ-1	30	Analysis	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Lifecycle mapping", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "I mapped the transactional lifecycle across four stages: test drive scheduled, visit confirmed, booking completed, and delivery pending, to identify gaps between user intent and system response. ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "The greatest friction occurred between scheduling and showroom visit, where committed users received no visible reinforcement of progress or clarity on next steps, increasing cognitive load and delaying action.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "\\t", "type": "tab", "style": "", "detail": 2, "format": 0, "version": 1}, {"mode": "normal", "text": "\\t", "type": "tab", "style": "", "detail": 2, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	https://docs.google.com/spreadsheets/d/17g-SkxWHH65NfJQECCaTYZXHoGXw_uPWw1Y_SjjLPC8/edit?usp=sharing	Strategy & Limitations	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Hypothesis", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "I hypothesized that if the homepage dynamically reflected a user’s transaction state and surfaced the most relevant next action, we could reduce cognitive load, shorten the time between scheduling and visit, and improve downstream delivery conversion.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Constraints", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "The solution needed to operate within ReactJS performance limitations, which restricted complex interaction patterns. A dedicated transaction dashboard already existed under the Profile section and was owned by the Platform team, limiting structural reorganization. Leadership expressed concern about temporary conversion drops due to major interface changes. The redesign had to be delivered within a four-week window.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	https://www.figma.com/design/kREifhWpJXOrfuRhRkRxQ7/Buy-Home-Page?node-id=74-286&t=IefaVzh04fgtOwqJ-1	Exploration & Tradeoffs	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "We explored three approaches: enhancing banners within the existing layout, introducing a dedicated transactional dashboard, and adapting the homepage contextually by lifecycle state. Banner enhancements were low effort but insufficient for stage clarity, while a separate dashboard risked fragmentation and ownership conflict. We selected a state-aware homepage to preserve continuity while improving visibility. A snappable swipe interaction was explored but deprioritized due to performance limits and cognitive overhead, prioritizing clarity over novelty.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	29	Final Designs	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "The redesigned homepage dynamically adapts based on the user’s transaction stage. For users who have scheduled a test drive, the interface prominently surfaces visit details and next actions. For users who have completed booking, the homepage shifts focus toward delivery tracking and reassurance.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "A new status tag component was introduced to standardize stage visibility. Content prioritization became intent-driven rather than generic. Redundant modules were reduced to prevent distraction from high-intent actions.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "The homepage now distinguishes between exploratory and  committed behaviors.", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}], "direction": null}}	Outcome	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Following launch, key lifecycle metrics demonstrated measurable improvements across progression speed and downstream conversion:", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Time-to-Visit (T2V): reduced by 5.14%", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "User-to-Visit (U2V): uplift of 3.6%", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "User-to-Delivery (U2D): increased by 3.2%", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}], "listType": "bullet", "direction": null, "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "The reduction in time-to-visit shortened booking cycles and improved operational predictability across deliveries.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	Reflections	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "This project reinforced that transactional users value progression clarity over feature depth. Designing for committed intent required structural restraint and contextual visibility rather than interface novelty. Working within technical and organizational constraints sharpened my approach to system design prioritizing clarity, continuity, and measurable business impact over interaction complexity.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	Optimising mid-funnel conversion	How might we design Spinny’s Buy Homepage as a seamless hub for used-car transaction updates and action management for transactional users?	15	2026-03-06 19:19:12.851+00	2026-03-06 19:16:32.759+00
\.


--
-- Data for Name: buy_home_rels; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.buy_home_rels (id, "order", parent_id, path, media_id, works_id) FROM stdin;
5	1	1	finalDesigns.images	28	\N
6	2	1	finalDesigns.images	61	\N
7	3	1	finalDesigns.images	27	\N
8	1	1	moreWork.works	\N	2
9	2	1	moreWork.works	\N	3
\.


--
-- Data for Name: car_comparison; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.car_comparison (id, hero_title, hero_content, opportunity_title, opportunity_content, opportunity_iframe, problem_title, problem_content, problem_image_id, problem_video_id, hypothesis_title, hypothesis_content, exploration_title, exploration_content, exploration_iframe, floor_testing_title, floor_testing_content, floor_testing_image_id, floor_testing_redirect_image_id, final_designs_title, final_designs_content, outcome_title, outcome_content, reflections_title, reflections_content, meta_title, meta_description, meta_image_id, updated_at, created_at) FROM stdin;
1	Comparison feature adding decision speed	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h4", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Spinny did not have a comparison experience. Users evaluating multiple cars manually navigated between detail pages to assess differences.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "After identifying a recurring high intent evaluation behaviour, I led the design and rollout of the platform’s first structured comparison system. The solution was validated through floor testing and a large-scale A/B experiment (~238K users), improving progression across test drive, token, and delivery.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	Opportunity	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h4", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "While analysing navigation sequences, I observed a consistent oscillation pattern: This behaviour signalled re-evaluation, not casual browsing.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Back-testing revealed that users exhibiting this pattern contributed to (49% of total monthly test drives), disproportionately representing high-intent evaluators.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "This indicated comparison was already happening, unsupported and cognitively heavy.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	https://docs.google.com/spreadsheets/d/1j2Ub9CmMJBhUeL0mZ7_gGwkq6L0U7HZY2x4DGevcBxM/edit?usp=sharing	Problem	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "High-intent users were:", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Retaining specifications in working memory", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Switching between PDP’s repeatedly", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Comparing non-prioritized attributes", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}], "listType": "number", "direction": null, "textFormat": 1}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "There was no structured hierarchy to guide tradeoffs between key variables like price, EMI, mileage, or ownership.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "The system provided information.  It did not support decision-making.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	35	38	Hypothesis	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Introducing a structured comparison layer for behaviourally identified evaluators would:", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Reduce cognitive strain", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Improve interpretation clarity", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Increase downstream progression quality", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}], "listType": "number", "direction": null, "textFormat": 1}], "direction": null}}	Exploration & Tradeoffs	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Structural Variants Explored", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Flat Spec Grid", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 1, "version": 1, "children": [{"mode": "normal", "text": "Equal-weight parameters.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 1, "version": 1, "children": [{"mode": "normal", "text": "Rejected due to cognitive overload and low scan efficiency.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "number", "direction": null}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Card-Based Comparison", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 1, "version": 1, "children": [{"mode": "normal", "text": "Visually simplified but reduced cross-attribute scannability", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "number", "direction": null}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Hierarchical Comparison Model (Selected)", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 1, "version": 1, "children": [{"mode": "normal", "text": "Primary attributes surfaced first (Price, EMI, Ownership, Mileage)", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 1, "version": 1, "children": [{"mode": "normal", "text": "Secondary specifications grouped logically", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 1, "version": 1, "children": [{"mode": "normal", "text": "Differences highlighted conditionally", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 1, "version": 1, "children": [{"mode": "normal", "text": "Density preserved while introducing hierarchy", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "number", "direction": null}], "direction": null}], "listType": "number", "direction": null}], "direction": null, "textFormat": 1}}	https://www.figma.com/design/FIddV7RDKsj10hEeixk2Z3/Car-Comparison?node-id=8133-46332&t=GTZOHmHfs8X6Hc40-1	Floor Testing (Validation)	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Before launching the experiment, I conducted in-person hub testing with - 10 active evaluators, comparing two structural variants.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "The key distinction tested was scale logic:", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Variant 1: Independent scales per parameter", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Variant 2: Consistent normalized scale across attributes", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}], "listType": "number", "direction": null, "textFormat": 1}, {"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Observations", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Users consistently reported Variant 2 as clearer due to scale consistency.", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Decision confidence improved when differences were visually normalized.", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Users made quicker choices when primary attributes were visually emphasized.", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Minor feedback led to refinements in header prominence and summary density.", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}], "listType": "number", "direction": null, "textFormat": 1}], "direction": null}}	37	65	Final Designs	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "The experience was triggered dynamically for users exhibiting the A → B → A pattern.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h6", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "No explicit “Compare” CTA was introduced to avoid artificial adoption bias.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Randomized A/B test", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "~238K eligible users", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Metrics measured at user level", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "number", "direction": null}], "direction": null}}	Outcome	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Uplift increased deeper in the funnel, suggesting improved decision quality rather than surface engagement growth.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Business Metrics", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "User-to-test drive scheduled (U2Tds): uplift of ↑1.6%", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "User-to-token (U2T): uplift of ↑3.8%", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "User-to-Delivery (U2D): uplift of ↑5.3%", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}], "listType": "bullet", "direction": null, "textFormat": 1}, {"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Key User Metrics (Turn around Time)", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Time to Token (T2T) : (down by ↓12.4%)", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Time to Visit (T2V) : (down by ↓8.3%)", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}], "listType": "bullet", "direction": null, "textFormat": 1}], "direction": null}}	Reflections	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "By structuring evaluation around weighted decision variables rather than flat information display, the system reduced cognitive friction for high-intent users and improved downstream qualification. ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"type": "linebreak", "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "High-intent comparison behaviour was already present in the system. The opportunity was not to create demand, but to support it with decision architecture.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	Comparison feature adding decision speed	Spinny did not have a comparison experience. Users evaluating multiple cars manually navigated between detail pages to assess differences.	16	2026-03-07 11:07:26.663+00	2026-03-06 19:42:00.898+00
\.


--
-- Data for Name: car_comparison_rels; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.car_comparison_rels (id, "order", parent_id, path, media_id, works_id) FROM stdin;
6	1	1	finalDesigns.images	33	\N
7	2	1	finalDesigns.images	31	\N
8	3	1	finalDesigns.images	32	\N
9	1	1	moreWork.works	\N	1
10	2	1	moreWork.works	\N	4
\.


--
-- Data for Name: clear_trip; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.clear_trip (id, hero_title, problem_title, problem_content, challenge_title, challenge_content, impact_title, impact_content, impact_redirect_link, meta_title, meta_description, meta_image_id, updated_at, created_at) FROM stdin;
1	Reducing drop offs at Payment Funnel	Problem	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "A significant drop-off was occurring in the payment journey, particularly after users reviewed their trip summary.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"type": "linebreak", "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "Despite a simple 3-step flow (Review → Add Traveller → Pay), nearly 1,600 users were bouncing at the trip summary stage. Limited visibility of price breakdowns and unclear coupon confirmation reduced trust and weakened purchase motivation at the final step.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	Challenge	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Improve pricing transparency without adding friction or visual clutter.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Reinforce cost clarity and coupon confirmation to reduce last-mile hesitation.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Reduce drop-offs while maintaining a fast, streamlined checkout experience.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Increase completion rates without increasing cognitive load in a high-intent flow.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "number", "direction": null}], "direction": null}}	Impact	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Reduced payment-stage drop-offs and improved funnel progression.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Strengthened user trust through clearer pricing and confirmation signals.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Increased checkout completion, directly contributing to higher transaction conversion.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "number", "direction": null}], "direction": null}}	https://www.figma.com/proto/AaHU2t1WEMeJGvbdhi2kk7/Payments-page-Revamp?node-id=1826-1845&t=BU9KR1vWg6DsIfmq-1&scaling=scale-down-width&content-scaling=fixed&page-id=1517%3A56651&starting-point-node-id=1826%3A1845	Reducing drop offs at Payment Funnel	Reducing drop offs at Payment Funnel	18	2026-03-06 19:44:51.964+00	2026-03-06 19:44:51.964+00
\.


--
-- Data for Name: clear_trip_hero_tags; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.clear_trip_hero_tags (_order, _parent_id, id, keyword) FROM stdin;
1	1	69ab2e2bb53116f01b54540b	Mobile App
2	1	69ab2e2db53116f01b54540c	PWA
3	1	69ab2e2fb53116f01b54540d	Experience Revamp
\.


--
-- Data for Name: clear_trip_rels; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.clear_trip_rels (id, "order", parent_id, path, media_id) FROM stdin;
1	1	1	hero.images	39
2	2	1	hero.images	40
3	3	1	hero.images	41
4	4	1	hero.images	42
5	5	1	hero.images	43
6	6	1	hero.images	44
\.


--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.contacts (id, content, updated_at, created_at) FROM stdin;
1	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "For new work enquiries or if you just want to say a hello - drop me a message. ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	2026-03-06 16:40:43.417+00	2026-03-06 16:40:43.417+00
\.


--
-- Data for Name: contacts_contacts; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.contacts_contacts (_order, _parent_id, id, name, href, type) FROM stdin;
1	1	69ab0364b010d4de04207a9a	utkarshraj***0@gmail.com	mailto:utkarshraj7540@gmail.com	copy
2	1	69ab0366b010d4de04207a9c	Linkedin	https://linkedin.com/in/utkarsh-raj-299386191	link
3	1	69ab0368b010d4de04207a9e	Send coffee	https://calendar.google.com/calendar/render?add=utkarshraj7540@gmail.com&action=TEMPLATE&text=Catch Up	link
\.


--
-- Data for Name: ec_times; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.ec_times (id, hero_title, problem_title, problem_content, challenge_title, challenge_content, impact_title, impact_content, impact_redirect_link, meta_title, meta_description, meta_image_id, updated_at, created_at) FROM stdin;
1	Improving ET Prime feature discoverability	Problem	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ET Prime subscribers were paying for premium access but under-utilizing key features within the app. Low discoverability created a value perception gap, users couldn’t fully experience what they had already paid for, impacting engagement and long-term retention.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	Challenge	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Translating research insights into scalable product interventions required balancing usability, discovery, and business objectives within a content-first ecosystem.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Simplify onboarding while clearly communicating premium value, improving time-to-value without increasing drop-offs.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Surface premium features contextually within a cluttered interface, enhancing visibility without disrupting core reading behaviour.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Enable meaningful personalization using existing user signals, improving relevance without adding cognitive or UI overhead.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Align feature discovery with user intent, embedding premium exploration into natural consumption journeys rather than forcing promotion.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "number", "direction": null}], "direction": null}}	Impact	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "By aligning feature visibility with user behaviour, the redesign strengthened retention economics and demonstrated measurable business impact.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "+28% increase in Prime user renewals, exceeding initial projections by 8% post-launch.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Growth in new subscriptions, indicating stronger value perception among users.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Improved engagement with premium features, reinforcing the ROI of the subscription model.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "number", "direction": null}], "direction": null}}	https://www.figma.com/proto/aTR4rObDbhSFkR7KoDOiOS/Portfolio-Website?node-id=62-83&t=EcDlaxQr0arGC1bo-1&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=62%3A83	Improving ET Prime feature discoverability	Improving ET Prime feature discoverability	17	2026-03-06 19:47:43.97+00	2026-03-06 19:47:43.97+00
\.


--
-- Data for Name: ec_times_hero_tags; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.ec_times_hero_tags (_order, _parent_id, id, keyword) FROM stdin;
1	1	69ab2ec5b53116f01b54540e	Mobile App
2	1	69ab2ec7b53116f01b54540f	PWA
3	1	69ab2ec8b53116f01b545410	Experience Revamp
\.


--
-- Data for Name: ec_times_rels; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.ec_times_rels (id, "order", parent_id, path, media_id) FROM stdin;
1	1	1	hero.images	45
\.


--
-- Data for Name: home; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.home (id, hero_title, hero_subtitle, hero_content, info_left_content, info_right_content, info_image_id, meta_title, meta_description, meta_image_id, updated_at, created_at) FROM stdin;
1	Utkarsh Raj	Sr. Product Designer	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h4", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Hello! I’m a senior product design partner to founders and  tech companies.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "I help founders, tech companies, and fast-moving teams turn ideas into real products. My hands-on, practical approach builds momentum by keeping teams focused, communication clear, and projects moving forward.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h4", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "I help teams move fast.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "I design features, products and apps for ambitious teams and organisations who want to move quickly and build things that matter. Based in India, I help tech companies and startups turn ideas into valuable useful products with less friction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h4", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "My approach.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "My approach is practical and momentum-driven. I keep projects organised and transparent, sharing updates via video walkthrough and keeping everyone aligned without endless meetings. I believe in open, honest communication. I share knowledge freely so we all can grow together. ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	25	Sr. Product Designer	Senior product design partner to founders and tech companies. Turning ideas into real products with hands-on, practical approach.	25	2026-03-09 12:13:54.382+00	2026-03-06 18:47:13.258+00
\.


--
-- Data for Name: home_rels; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.home_rels (id, "order", parent_id, path, media_id, works_id) FROM stdin;
94	1	1	hero.workedAt	60	\N
95	2	1	hero.workedAt	50	\N
96	3	1	hero.workedAt	53	\N
97	4	1	hero.workedAt	59	\N
98	5	1	hero.workedAt	58	\N
99	6	1	hero.workedAt	57	\N
100	1	1	works.extendedCases	\N	2
101	2	1	works.extendedCases	\N	1
102	1	1	works.miniCases	\N	3
103	2	1	works.miniCases	\N	4
\.


--
-- Data for Name: media; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.media (id, alt, thumbnail_id, prefix, updated_at, created_at, url, thumbnail_u_r_l, filename, mime_type, filesize, width, height, focal_x, focal_y, sizes_preview_url, sizes_preview_width, sizes_preview_height, sizes_preview_mime_type, sizes_preview_filesize, sizes_preview_filename) FROM stdin;
15	Buy Home	\N	Works	2026-03-06 17:06:25.878+00	2026-03-06 17:06:22.813+00	/api/media/file/work_buy-home.webp	preview	work_buy-home.webp	image/webp	123340	3232	2160	50	50	/api/media/file/work_buy-home-400x267.webp	400	267	image/webp	7042	work_buy-home-400x267.webp
16	Car Comparison	\N	Works	2026-03-06 17:06:30.324+00	2026-03-06 17:06:27.805+00	/api/media/file/work_car-comparison.webp	preview	work_car-comparison.webp	image/webp	126842	3232	2160	50	50	/api/media/file/work_car-comparison-400x267.webp	400	267	image/webp	6770	work_car-comparison-400x267.webp
17	The Economic Times	\N	Works	2026-03-06 17:06:34.18+00	2026-03-06 17:06:31.467+00	/api/media/file/work_the-economic-times.webp	preview	work_the-economic-times.webp	image/webp	128554	3232	2160	50	50	/api/media/file/work_the-economic-times-400x267.webp	400	267	image/webp	7552	work_the-economic-times-400x267.webp
18	ClearTrip	\N	Works	2026-03-06 17:06:38.286+00	2026-03-06 17:06:35.169+00	/api/media/file/work_clear-trip.webp	preview	work_clear-trip.webp	image/webp	151408	1616	1080	50	50	/api/media/file/work_clear-trip-400x267.webp	400	267	image/webp	13404	work_clear-trip-400x267.webp
25	Info	\N	Home	2026-03-06 17:11:19.778+00	2026-03-06 17:11:14.838+00	/api/media/file/home_info.webp	preview	home_info.webp	image/webp	925926	2000	1332	50	50	/api/media/file/home_info-400x266.webp	400	266	image/webp	11260	home_info-400x266.webp
27	Buy Home Final Design Before	\N	BuyHome	2026-03-06 17:13:56.748+00	2026-03-06 17:13:54.151+00	/api/media/file/buy_home_final-design-before.webp	preview	buy_home_final-design-before.webp	image/webp	90358	1250	1738	50	50	/api/media/file/buy_home_final-design-before-400x556.webp	400	556	image/webp	20632	buy_home_final-design-before-400x556.webp
28	Buy Home Final Design	\N	BuyHome	2026-03-06 17:14:00.856+00	2026-03-06 17:13:58.218+00	/api/media/file/buy_home_final.webp	preview	buy_home_final.webp	image/webp	121224	3360	1738	50	50	/api/media/file/buy_home_final-400x207.webp	400	207	image/webp	7640	buy_home_final-400x207.webp
29	Buy Home Versions	\N	BuyHome	2026-03-06 17:14:05.802+00	2026-03-06 17:14:02.265+00	/api/media/file/buy_home_versions.webp	preview	buy_home_versions.webp	image/webp	233704	3360	1712	50	50	/api/media/file/buy_home_versions-400x204.webp	400	204	image/webp	11118	buy_home_versions-400x204.webp
30	Buy Home Returning User	\N	BuyHome	2026-03-06 17:14:09.95+00	2026-03-06 17:14:07.058+00	/api/media/file/buy_home_returning-user.webp	preview	buy_home_returning-user.webp	image/webp	157436	1042	1820	50	50	/api/media/file/buy_home_returning-user-400x699.webp	400	699	image/webp	42798	buy_home_returning-user-400x699.webp
31	Car Comparison Entry 1	\N	CarComparison	2026-03-06 17:17:39.531+00	2026-03-06 17:17:36.365+00	/api/media/file/car_comparison_entry-1.webp	preview	car_comparison_entry-1.webp	image/webp	158458	3360	1738	50	50	/api/media/file/car_comparison_entry-1-400x207.webp	400	207	image/webp	7440	car_comparison_entry-1-400x207.webp
32	Car Comparison Entry 2	\N	CarComparison	2026-03-06 17:17:44.036+00	2026-03-06 17:17:40.919+00	/api/media/file/car_comparison_entry-2.webp	preview	car_comparison_entry-2.webp	image/webp	150270	1564	1738	50	50	/api/media/file/car_comparison_entry-2-400x445.webp	400	445	image/webp	26442	car_comparison_entry-2-400x445.webp
33	Car Comparison Final Design	\N	CarComparison	2026-03-06 17:17:48.87+00	2026-03-06 17:17:46.022+00	/api/media/file/car_comparison_final.webp	preview	car_comparison_final.webp	image/webp	271082	3360	1738	50	50	/api/media/file/car_comparison_final-400x207.webp	400	207	image/webp	9000	car_comparison_final-400x207.webp
34	Car Comparison Video Thumbnail	\N	CarComparison	2026-03-06 17:17:51.216+00	2026-03-06 17:17:49.47+00	/api/media/file/car-car_comparison_video-thumbnail.webp	preview	car-car_comparison_video-thumbnail.webp	image/webp	6980	480	800	50	50	/api/media/file/car-car_comparison_video-thumbnail-400x667.webp	400	667	image/webp	5842	car-car_comparison_video-thumbnail-400x667.webp
35	Car Comparison Comparing User	\N	CarComparison	2026-03-06 17:17:54.79+00	2026-03-06 17:17:52.234+00	/api/media/file/car_comparison_comparing-user.webp	preview	car_comparison_comparing-user.webp	image/webp	140800	1042	1820	50	50	/api/media/file/car_comparison_comparing-user-400x699.webp	400	699	image/webp	40236	car_comparison_comparing-user-400x699.webp
37	Car Comparison Variants	\N	CarComparison	2026-03-06 17:19:57.002+00	2026-03-06 17:19:54.023+00	/api/media/file/car_comparison_variants.webp	preview	car_comparison_variants.webp	image/webp	189510	3360	1712	50	50	/api/media/file/car_comparison_variants-400x204.webp	400	204	image/webp	8416	car_comparison_variants-400x204.webp
38	Car Comparison Demo	34	CarComparison	2026-03-06 17:20:03.535+00	2026-03-06 17:19:57.785+00	/api/media/file/car_comparison_demo.webm	/api/media/file/car_comparison_demo.webm	car_comparison_demo.webm	video/webm	1953977	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
39	ClearTrip 1	\N	ClearTrip	2026-03-06 17:22:02.823+00	2026-03-06 17:21:59.189+00	/api/media/file/clear_trip_1.webp	preview	clear_trip_1.webp	image/webp	235730	4096	2304	50	50	/api/media/file/clear_trip_1-400x225.webp	400	225	image/webp	10462	clear_trip_1-400x225.webp
40	ClearTrip 2	\N	ClearTrip	2026-03-06 17:22:06.928+00	2026-03-06 17:22:04.442+00	/api/media/file/clear_trip_2.webp	preview	clear_trip_2.webp	image/webp	148678	4096	2304	50	50	/api/media/file/clear_trip_2-400x225.webp	400	225	image/webp	6890	clear_trip_2-400x225.webp
41	ClearTrip 3	\N	ClearTrip	2026-03-06 17:22:11.09+00	2026-03-06 17:22:08.221+00	/api/media/file/clear_trip_3.webp	preview	clear_trip_3.webp	image/webp	159156	4096	2304	50	50	/api/media/file/clear_trip_3-400x225.webp	400	225	image/webp	7676	clear_trip_3-400x225.webp
42	ClearTrip 4	\N	ClearTrip	2026-03-06 17:22:16.426+00	2026-03-06 17:22:12.855+00	/api/media/file/clear_trip_4.webp	preview	clear_trip_4.webp	image/webp	170642	4096	2304	50	50	/api/media/file/clear_trip_4-400x225.webp	400	225	image/webp	7094	clear_trip_4-400x225.webp
43	ClearTrip 5	\N	ClearTrip	2026-03-06 17:22:19.805+00	2026-03-06 17:22:17.703+00	/api/media/file/clear_trip_5.webp	preview	clear_trip_5.webp	image/webp	158108	4096	2304	50	50	/api/media/file/clear_trip_5-400x225.webp	400	225	image/webp	6860	clear_trip_5-400x225.webp
46	Honda CIty	\N	AIPractices	2026-03-06 17:24:38.987+00	2026-03-06 17:24:36.305+00	/api/media/file/ai_practices_city_thumbnail.webp	preview	ai_practices_city_thumbnail.webp	image/webp	16126	400	720	50	50	/api/media/file/ai_practices_city_thumbnail-400x720.webp	400	720	image/webp	16126	ai_practices_city_thumbnail-400x720.webp
44	ClearTrip 6	\N	ClearTrip	2026-03-06 17:22:23.873+00	2026-03-06 17:22:21.681+00	/api/media/file/clear_trip_6.webp	preview	clear_trip_6.webp	image/webp	153468	4096	2304	50	50	/api/media/file/clear_trip_6-400x225.webp	400	225	image/webp	6594	clear_trip_6-400x225.webp
49	Honda CIty Video	46	AIPractices	2026-03-06 17:26:52.269+00	2026-03-06 17:26:46.188+00	/api/media/file/ai_practices_city.webm	/api/media/file/ai_practices_city.webm	ai_practices_city.webm	video/webm	1576278	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
50	The Economic Times	\N	Logos	2026-03-06 19:00:21.968+00	2026-03-06 19:00:19.654+00	/api/media/file/logo_the-economic-times.webp	preview	logo_the-economic-times.webp	image/webp	8122	512	72	50	50	/api/media/file/logo_the-economic-times-400x56.webp	400	56	image/webp	8716	logo_the-economic-times-400x56.webp
52	Deloitte	\N	Logos	2026-03-06 19:00:27.654+00	2026-03-06 19:00:25.634+00	/api/media/file/logo_deloitte.webp	/api/media/file/logo_deloitte.webp	logo_deloitte.webp	image/webp	1358	312	112	50	50	\N	\N	\N	\N	\N	\N
53	ClearTrip	\N	Logos	2026-03-06 19:00:30.02+00	2026-03-06 19:00:28.267+00	/api/media/file/logo_clear-trip.webp	/api/media/file/logo_clear-trip.webp	logo_clear-trip.webp	image/webp	7382	312	112	50	50	\N	\N	\N	\N	\N	\N
57	Zostel	\N	Logos	2026-03-06 19:08:16.617+00	2026-03-06 19:08:14.554+00	/api/media/file/logo_zostel.webp	/api/media/file/logo_zostel.webp	logo_zostel.webp	image/webp	4630	312	112	50	50	\N	\N	\N	\N	\N	\N
58	Deloitte	\N	Logos	2026-03-06 19:08:19.482+00	2026-03-06 19:08:17.606+00	/api/media/file/logo_deloitte-1.webp	/api/media/file/logo_deloitte-1.webp	logo_deloitte-1.webp	image/webp	1358	312	112	50	50	\N	\N	\N	\N	\N	\N
59	Flipkart	\N	Logos	2026-03-06 19:08:22.243+00	2026-03-06 19:08:20.084+00	/api/media/file/logo_flipkart.webp	/api/media/file/logo_flipkart.webp	logo_flipkart.webp	image/webp	4582	312	112	50	50	\N	\N	\N	\N	\N	\N
60	Spinny	\N	Logos	2026-03-06 19:08:24.536+00	2026-03-06 19:08:22.794+00	/api/media/file/logo_spinny.webp	/api/media/file/logo_spinny.webp	logo_spinny.webp	image/webp	2190	312	112	50	50	\N	\N	\N	\N	\N	\N
61	Buy Home Final Design After	\N	BuyHome	2026-03-06 19:18:39.161+00	2026-03-06 19:18:33.119+00	/api/media/file/buy_home_final-design-after.webp	preview	buy_home_final-design-after.webp	image/webp	212272	3360	1738	50	50	/api/media/file/buy_home_final-design-after-400x207.webp	400	207	image/webp	11560	buy_home_final-design-after-400x207.webp
64	Car Comparison Final Design	\N	CarComparison	2026-03-07 10:58:57.221+00	2026-03-07 10:58:54.413+00	/api/media/file/car_comparison_final-1.webp	preview	car_comparison_final-1.webp	image/webp	268190	3360	1738	50	50	/api/media/file/car_comparison_final-1-400x207.webp	400	207	image/webp	9070	car_comparison_final-1-400x207.webp
45	The Economic Times	\N	TheEconomicTimes	2026-03-06 17:23:16.288+00	2026-03-06 17:23:12.817+00	/api/media/file/the_economic_time_1.webp	preview	the_economic_time_1.webp	image/webp	346348	4096	2515	50	50	/api/media/file/the_economic_time_1-400x246.webp	400	246	image/webp	12702	the_economic_time_1-400x246.webp
62	Thar VIdeo Thumbnail	\N	AIPractices	2026-03-06 19:25:51.163+00	2026-03-06 19:25:48.267+00	/api/media/file/ai_practices_thar_thumbnail.webp	preview	ai_practices_thar_thumbnail.webp	image/webp	122206	1280	720	50	50	/api/media/file/ai_practices_thar_thumbnail-400x225.webp	400	225	image/webp	19606	ai_practices_thar_thumbnail-400x225.webp
63	Thar VIdeo 	62	AIPractices	2026-03-06 19:27:16.29+00	2026-03-06 19:27:08.544+00	/api/media/file/ai_practices_thar.webm.webm	/api/media/file/ai_practices_thar.webm.webm	ai_practices_thar.webm.webm	video/webm	3161277	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
65	Car Comparison User testing	\N	CarComparison	2026-03-07 11:07:20.618+00	2026-03-07 11:07:18.212+00	/api/media/file/car_comparison_user_testing.webp	preview	car_comparison_user_testing.webp	image/webp	222668	3037	1240	50	50	/api/media/file/car_comparison_user_testing-400x163.webp	400	163	image/webp	11276	car_comparison_user_testing-400x163.webp
\.


--
-- Data for Name: navlinks; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.navlinks (id, updated_at, created_at) FROM stdin;
1	2026-03-06 16:39:49.365+00	2026-03-06 16:39:49.365+00
\.


--
-- Data for Name: navlinks_nav_links; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.navlinks_nav_links (_order, _parent_id, id, title, href) FROM stdin;
1	1	69ab032db010d4de04207a92	Work	/#works
2	1	69ab032eb010d4de04207a94	AI Practices	/ai-practices
3	1	69ab0331b010d4de04207a96	Info	/#info
4	1	69ab0334b010d4de04207a98	Contact	/#contact
\.


--
-- Data for Name: payload_kv; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.payload_kv (id, key, data) FROM stdin;
\.


--
-- Data for Name: payload_locked_documents; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.payload_locked_documents (id, global_slug, updated_at, created_at) FROM stdin;
19	car-comparison	2026-03-07 11:07:24.258+00	2026-03-07 11:04:34.52+00
23	home	2026-03-09 12:13:14.805+00	2026-03-09 12:13:14.803+00
10	buy-home	2026-03-06 19:19:11.424+00	2026-03-06 19:19:03.822+00
\.


--
-- Data for Name: payload_locked_documents_rels; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.payload_locked_documents_rels (id, "order", parent_id, path, media_id, users_id, works_id) FROM stdin;
10	\N	10	user	\N	1	\N
20	\N	19	user	\N	1	\N
26	\N	23	user	\N	1	\N
\.


--
-- Data for Name: payload_migrations; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.payload_migrations (id, name, batch, updated_at, created_at) FROM stdin;
1	20260306_154816	1	2026-03-06 15:48:21.288+00	2026-03-06 15:48:21.287+00
2	dev	-1	2026-03-07 11:33:14.526+00	2026-03-06 15:50:50.609+00
\.


--
-- Data for Name: payload_preferences; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.payload_preferences (id, key, value, updated_at, created_at) FROM stdin;
1	global-navlinks	{"editViewType": "default"}	2026-03-06 16:39:08.846+00	2026-03-06 16:39:08.228+00
2	global-contacts	{"editViewType": "default"}	2026-03-06 16:39:54.185+00	2026-03-06 16:39:53.546+00
4	collection-media	{"limit": 10}	2026-03-06 16:41:37.439+00	2026-03-06 16:41:01.519+00
6	global-buy-home	{"editViewType": "default"}	2026-03-06 17:04:17.354+00	2026-03-06 17:04:16.734+00
3	collection-media	{"limit": 10, "editViewType": "default"}	2026-03-06 17:23:43.416+00	2026-03-06 16:41:01.355+00
7	global-home	{"editViewType": "default"}	2026-03-06 17:30:11.5+00	2026-03-06 17:30:10.752+00
5	collection-works	{"limit": 10, "editViewType": "default"}	2026-03-06 18:41:32.645+00	2026-03-06 16:51:31.803+00
8	global-car-comparison	{"editViewType": "default"}	2026-03-06 19:20:03.015+00	2026-03-06 19:20:02.671+00
9	global-ai-practices	{"editViewType": "default"}	2026-03-06 19:20:27.467+00	2026-03-06 19:20:27.127+00
10	global-clear-trip	{"editViewType": "default"}	2026-03-06 19:22:22.875+00	2026-03-06 19:22:22.534+00
11	global-ec-times	{"editViewType": "default"}	2026-03-06 19:30:14.654+00	2026-03-06 19:30:14.344+00
\.


--
-- Data for Name: payload_preferences_rels; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.payload_preferences_rels (id, "order", parent_id, path, users_id) FROM stdin;
1	\N	1	user	1
2	\N	2	user	1
5	\N	4	user	1
7	\N	6	user	1
8	\N	3	user	1
10	\N	7	user	1
11	\N	5	user	1
12	\N	8	user	1
13	\N	9	user	1
14	\N	10	user	1
15	\N	11	user	1
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.users (id, updated_at, created_at, email, reset_password_token, reset_password_expiration, salt, hash, login_attempts, lock_until) FROM stdin;
1	2026-03-06 16:38:51.782+00	2026-03-06 16:38:51.781+00	utkarshraj7540@gmail.com	\N	\N	dc27e2317d7d84c3057beab1c9d45c3fa9069e6921238103824531f63562a4a6	85f9c8afbca13c32f38a51eb392c402b6e56f9981d63a0e5cdc53c06348a73a9ac0d8c5bdc61e34652ed6ad226783775c286f65049f338e82f357dcb5737d9f049d7182be97ff6cd9486596c867fa07237cfc3d6356c3d7a9edd3d7f3f71688f2a7befa966f1dada7a8fa8502a703fff8bbe18d96c78a46b8447871d9be111036a28f38f786740d42c96afca37da0d475b309db766780ac4ce32ab0a18d81da03ea0bbec056f9934a4f64b5ac35bc213a083209eb6e3bb87bffc2b5c4e0396f560bf26d8d3d81ddaa71e7066ea0b02d3aa3cd44ca216e187e7d3ebe0406b55c74b7205ff293aae20a0b17d482e500dce0b2e46532577f9dc510cac4870b58ad30b9f2a23f0445ec1ffe6626ed645b21ff107eb36438238e82e038263155e48919ae6f78e0e38e0706cf634729d2cc175bd7e1f19a4e46297cb3fb90845b1592230b7a7b44945eca5fad426cfeb686e754af0ebd52e8cbf0288b51ab2bcd9e276a9e77e17ce1663d47dc16439caacc4aff4cc2cfce0d5c7bf3f3eceb7b81b07ae7f1e7ed9a6b0ca430a476dabdfaca43448dd47e76cd371d0c28d5cdc813395d5fd951e858b775831a74037dd4d3e1a245652f160935652102a9d1949375b6ed1e728dad544e56c0c8808f03041a760519a75c4dacc1ba96109b2c865fbce78b6446bd5491ad0034ee89ae31fca4f193acd378193fc3b6a708c3289be15777e4a	0	\N
\.


--
-- Data for Name: users_sessions; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.users_sessions (_order, _parent_id, id, created_at, expires_at) FROM stdin;
1	1	1d350dfb-39b9-4fe5-9ee9-1e5276dbcd8a	2026-03-09 12:00:11.32+00	2026-03-09 14:00:11.32+00
2	1	2444bd42-449c-4754-bb42-4cdd8ca76cec	2026-03-09 12:49:31.971+00	2026-03-09 14:49:31.971+00
\.


--
-- Data for Name: works; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.works (id, slug, title, description, image_id, link_href, link_target, updated_at, created_at) FROM stdin;
1	buy-home	Optimising mid-funnel \\n conversion	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Internally referred to as ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "“Buy Homepage”", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	15	/work/buy-home	_self	2026-03-06 18:41:20.165+00	2026-03-06 18:41:20.162+00
2	car-comparison	Comparison feature enabling decision speed	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Internally referred to as ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "“Used Car Comparison”", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	16	/work/car-comparison	_self	2026-03-06 18:42:25.724+00	2026-03-06 18:42:25.723+00
4	ec-times	Improving ET Prime feature discoverability	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Internally referred to as ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "“ET Prime Discovery”", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	17	https://www.figma.com/proto/aTR4rObDbhSFkR7KoDOiOS/Portfolio-Website?node-id=62-83&t=EcDlaxQr0arGC1bo-1&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=62%3A83	_blank	2026-03-06 18:45:08.522+00	2026-03-06 18:45:08.522+00
3	clear-trip	Reducing drop offs at Payment Funnel	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Internally referred to as ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "“Payment Page Revamp”", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	18	/work/clear-trip	_self	2026-03-09 12:15:50.205+00	2026-03-06 18:43:56.974+00
\.


--
-- Data for Name: works_tags; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.works_tags (_order, _parent_id, id, keyword) FROM stdin;
1	1	69ab1fc09fba09ee540eca69	Mobile App
2	1	69ab1fc39fba09ee540eca6b	PWA
3	1	69ab1fc49fba09ee540eca6d	Experience Revamp
1	2	69ab20019fba09ee540eca6f	Mobile App
2	2	69ab20029fba09ee540eca71	PWA
3	2	69ab200b9fba09ee540eca73	New Feature
1	4	69ab20ab9fba09ee540eca7b	Mobile App
2	4	69ab20ac9fba09ee540eca7d	Experience Improvement
1	3	69ab20609fba09ee540eca75	Mobile App
2	3	69ab20639fba09ee540eca77	PWA
3	3	69ab20699fba09ee540eca79	Experience Revamp
\.


--
-- Name: ai_practices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.ai_practices_id_seq', 1, true);


--
-- Name: ai_practices_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.ai_practices_rels_id_seq', 5, true);


--
-- Name: buy_home_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.buy_home_id_seq', 1, true);


--
-- Name: buy_home_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.buy_home_rels_id_seq', 9, true);


--
-- Name: car_comparison_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.car_comparison_id_seq', 1, true);


--
-- Name: car_comparison_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.car_comparison_rels_id_seq', 10, true);


--
-- Name: clear_trip_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.clear_trip_id_seq', 1, true);


--
-- Name: clear_trip_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.clear_trip_rels_id_seq', 6, true);


--
-- Name: contacts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.contacts_id_seq', 1, true);


--
-- Name: ec_times_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.ec_times_id_seq', 1, true);


--
-- Name: ec_times_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.ec_times_rels_id_seq', 1, true);


--
-- Name: home_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.home_id_seq', 1, true);


--
-- Name: home_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.home_rels_id_seq', 103, true);


--
-- Name: media_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.media_id_seq', 65, true);


--
-- Name: navlinks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.navlinks_id_seq', 1, true);


--
-- Name: payload_kv_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.payload_kv_id_seq', 1, false);


--
-- Name: payload_locked_documents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.payload_locked_documents_id_seq', 24, true);


--
-- Name: payload_locked_documents_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.payload_locked_documents_rels_id_seq', 28, true);


--
-- Name: payload_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.payload_migrations_id_seq', 2, true);


--
-- Name: payload_preferences_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.payload_preferences_id_seq', 11, true);


--
-- Name: payload_preferences_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.payload_preferences_rels_id_seq', 15, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: works_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.works_id_seq', 4, true);


--
-- Name: ai_practices ai_practices_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.ai_practices
    ADD CONSTRAINT ai_practices_pkey PRIMARY KEY (id);


--
-- Name: ai_practices_rels ai_practices_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.ai_practices_rels
    ADD CONSTRAINT ai_practices_rels_pkey PRIMARY KEY (id);


--
-- Name: buy_home buy_home_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.buy_home
    ADD CONSTRAINT buy_home_pkey PRIMARY KEY (id);


--
-- Name: buy_home_rels buy_home_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.buy_home_rels
    ADD CONSTRAINT buy_home_rels_pkey PRIMARY KEY (id);


--
-- Name: car_comparison car_comparison_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.car_comparison
    ADD CONSTRAINT car_comparison_pkey PRIMARY KEY (id);


--
-- Name: car_comparison_rels car_comparison_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.car_comparison_rels
    ADD CONSTRAINT car_comparison_rels_pkey PRIMARY KEY (id);


--
-- Name: clear_trip_hero_tags clear_trip_hero_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.clear_trip_hero_tags
    ADD CONSTRAINT clear_trip_hero_tags_pkey PRIMARY KEY (id);


--
-- Name: clear_trip clear_trip_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.clear_trip
    ADD CONSTRAINT clear_trip_pkey PRIMARY KEY (id);


--
-- Name: clear_trip_rels clear_trip_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.clear_trip_rels
    ADD CONSTRAINT clear_trip_rels_pkey PRIMARY KEY (id);


--
-- Name: contacts_contacts contacts_contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.contacts_contacts
    ADD CONSTRAINT contacts_contacts_pkey PRIMARY KEY (id);


--
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);


--
-- Name: ec_times_hero_tags ec_times_hero_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.ec_times_hero_tags
    ADD CONSTRAINT ec_times_hero_tags_pkey PRIMARY KEY (id);


--
-- Name: ec_times ec_times_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.ec_times
    ADD CONSTRAINT ec_times_pkey PRIMARY KEY (id);


--
-- Name: ec_times_rels ec_times_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.ec_times_rels
    ADD CONSTRAINT ec_times_rels_pkey PRIMARY KEY (id);


--
-- Name: home home_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.home
    ADD CONSTRAINT home_pkey PRIMARY KEY (id);


--
-- Name: home_rels home_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.home_rels
    ADD CONSTRAINT home_rels_pkey PRIMARY KEY (id);


--
-- Name: media media_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.media
    ADD CONSTRAINT media_pkey PRIMARY KEY (id);


--
-- Name: navlinks_nav_links navlinks_nav_links_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.navlinks_nav_links
    ADD CONSTRAINT navlinks_nav_links_pkey PRIMARY KEY (id);


--
-- Name: navlinks navlinks_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.navlinks
    ADD CONSTRAINT navlinks_pkey PRIMARY KEY (id);


--
-- Name: payload_kv payload_kv_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.payload_kv
    ADD CONSTRAINT payload_kv_pkey PRIMARY KEY (id);


--
-- Name: payload_locked_documents payload_locked_documents_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.payload_locked_documents
    ADD CONSTRAINT payload_locked_documents_pkey PRIMARY KEY (id);


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_pkey PRIMARY KEY (id);


--
-- Name: payload_migrations payload_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.payload_migrations
    ADD CONSTRAINT payload_migrations_pkey PRIMARY KEY (id);


--
-- Name: payload_preferences payload_preferences_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.payload_preferences
    ADD CONSTRAINT payload_preferences_pkey PRIMARY KEY (id);


--
-- Name: payload_preferences_rels payload_preferences_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.payload_preferences_rels
    ADD CONSTRAINT payload_preferences_rels_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users_sessions users_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.users_sessions
    ADD CONSTRAINT users_sessions_pkey PRIMARY KEY (id);


--
-- Name: works works_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.works
    ADD CONSTRAINT works_pkey PRIMARY KEY (id);


--
-- Name: works_tags works_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.works_tags
    ADD CONSTRAINT works_tags_pkey PRIMARY KEY (id);


--
-- Name: ai_practices_ai_video_ai_video_demo_video_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX ai_practices_ai_video_ai_video_demo_video_idx ON public.ai_practices USING btree (ai_video_demo_video_id);


--
-- Name: ai_practices_ai_video_ai_video_image_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX ai_practices_ai_video_ai_video_image_idx ON public.ai_practices USING btree (ai_video_image_id);


--
-- Name: ai_practices_meta_meta_image_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX ai_practices_meta_meta_image_idx ON public.ai_practices USING btree (meta_image_id);


--
-- Name: ai_practices_rels_media_id_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX ai_practices_rels_media_id_idx ON public.ai_practices_rels USING btree (media_id);


--
-- Name: ai_practices_rels_order_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX ai_practices_rels_order_idx ON public.ai_practices_rels USING btree ("order");


--
-- Name: ai_practices_rels_parent_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX ai_practices_rels_parent_idx ON public.ai_practices_rels USING btree (parent_id);


--
-- Name: ai_practices_rels_path_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX ai_practices_rels_path_idx ON public.ai_practices_rels USING btree (path);


--
-- Name: buy_home_exploration_exploration_image_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX buy_home_exploration_exploration_image_idx ON public.buy_home USING btree (exploration_image_id);


--
-- Name: buy_home_meta_meta_image_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX buy_home_meta_meta_image_idx ON public.buy_home USING btree (meta_image_id);


--
-- Name: buy_home_process_process_image_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX buy_home_process_process_image_idx ON public.buy_home USING btree (process_image_id);


--
-- Name: buy_home_rels_media_id_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX buy_home_rels_media_id_idx ON public.buy_home_rels USING btree (media_id);


--
-- Name: buy_home_rels_order_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX buy_home_rels_order_idx ON public.buy_home_rels USING btree ("order");


--
-- Name: buy_home_rels_parent_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX buy_home_rels_parent_idx ON public.buy_home_rels USING btree (parent_id);


--
-- Name: buy_home_rels_path_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX buy_home_rels_path_idx ON public.buy_home_rels USING btree (path);


--
-- Name: buy_home_rels_works_id_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX buy_home_rels_works_id_idx ON public.buy_home_rels USING btree (works_id);


--
-- Name: car_comparison_floor_testing_floor_testing_image_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX car_comparison_floor_testing_floor_testing_image_idx ON public.car_comparison USING btree (floor_testing_image_id);


--
-- Name: car_comparison_floor_testing_floor_testing_redirect_imag_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX car_comparison_floor_testing_floor_testing_redirect_imag_idx ON public.car_comparison USING btree (floor_testing_redirect_image_id);


--
-- Name: car_comparison_meta_meta_image_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX car_comparison_meta_meta_image_idx ON public.car_comparison USING btree (meta_image_id);


--
-- Name: car_comparison_problem_problem_image_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX car_comparison_problem_problem_image_idx ON public.car_comparison USING btree (problem_image_id);


--
-- Name: car_comparison_problem_problem_video_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX car_comparison_problem_problem_video_idx ON public.car_comparison USING btree (problem_video_id);


--
-- Name: car_comparison_rels_media_id_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX car_comparison_rels_media_id_idx ON public.car_comparison_rels USING btree (media_id);


--
-- Name: car_comparison_rels_order_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX car_comparison_rels_order_idx ON public.car_comparison_rels USING btree ("order");


--
-- Name: car_comparison_rels_parent_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX car_comparison_rels_parent_idx ON public.car_comparison_rels USING btree (parent_id);


--
-- Name: car_comparison_rels_path_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX car_comparison_rels_path_idx ON public.car_comparison_rels USING btree (path);


--
-- Name: car_comparison_rels_works_id_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX car_comparison_rels_works_id_idx ON public.car_comparison_rels USING btree (works_id);


--
-- Name: clear_trip_hero_tags_order_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX clear_trip_hero_tags_order_idx ON public.clear_trip_hero_tags USING btree (_order);


--
-- Name: clear_trip_hero_tags_parent_id_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX clear_trip_hero_tags_parent_id_idx ON public.clear_trip_hero_tags USING btree (_parent_id);


--
-- Name: clear_trip_meta_meta_image_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX clear_trip_meta_meta_image_idx ON public.clear_trip USING btree (meta_image_id);


--
-- Name: clear_trip_rels_media_id_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX clear_trip_rels_media_id_idx ON public.clear_trip_rels USING btree (media_id);


--
-- Name: clear_trip_rels_order_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX clear_trip_rels_order_idx ON public.clear_trip_rels USING btree ("order");


--
-- Name: clear_trip_rels_parent_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX clear_trip_rels_parent_idx ON public.clear_trip_rels USING btree (parent_id);


--
-- Name: clear_trip_rels_path_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX clear_trip_rels_path_idx ON public.clear_trip_rels USING btree (path);


--
-- Name: contacts_contacts_order_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX contacts_contacts_order_idx ON public.contacts_contacts USING btree (_order);


--
-- Name: contacts_contacts_parent_id_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX contacts_contacts_parent_id_idx ON public.contacts_contacts USING btree (_parent_id);


--
-- Name: ec_times_hero_tags_order_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX ec_times_hero_tags_order_idx ON public.ec_times_hero_tags USING btree (_order);


--
-- Name: ec_times_hero_tags_parent_id_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX ec_times_hero_tags_parent_id_idx ON public.ec_times_hero_tags USING btree (_parent_id);


--
-- Name: ec_times_meta_meta_image_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX ec_times_meta_meta_image_idx ON public.ec_times USING btree (meta_image_id);


--
-- Name: ec_times_rels_media_id_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX ec_times_rels_media_id_idx ON public.ec_times_rels USING btree (media_id);


--
-- Name: ec_times_rels_order_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX ec_times_rels_order_idx ON public.ec_times_rels USING btree ("order");


--
-- Name: ec_times_rels_parent_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX ec_times_rels_parent_idx ON public.ec_times_rels USING btree (parent_id);


--
-- Name: ec_times_rels_path_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX ec_times_rels_path_idx ON public.ec_times_rels USING btree (path);


--
-- Name: home_info_info_image_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX home_info_info_image_idx ON public.home USING btree (info_image_id);


--
-- Name: home_meta_meta_image_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX home_meta_meta_image_idx ON public.home USING btree (meta_image_id);


--
-- Name: home_rels_media_id_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX home_rels_media_id_idx ON public.home_rels USING btree (media_id);


--
-- Name: home_rels_order_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX home_rels_order_idx ON public.home_rels USING btree ("order");


--
-- Name: home_rels_parent_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX home_rels_parent_idx ON public.home_rels USING btree (parent_id);


--
-- Name: home_rels_path_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX home_rels_path_idx ON public.home_rels USING btree (path);


--
-- Name: home_rels_works_id_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX home_rels_works_id_idx ON public.home_rels USING btree (works_id);


--
-- Name: media_created_at_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX media_created_at_idx ON public.media USING btree (created_at);


--
-- Name: media_filename_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE UNIQUE INDEX media_filename_idx ON public.media USING btree (filename);


--
-- Name: media_sizes_preview_sizes_preview_filename_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX media_sizes_preview_sizes_preview_filename_idx ON public.media USING btree (sizes_preview_filename);


--
-- Name: media_thumbnail_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX media_thumbnail_idx ON public.media USING btree (thumbnail_id);


--
-- Name: media_updated_at_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX media_updated_at_idx ON public.media USING btree (updated_at);


--
-- Name: navlinks_nav_links_order_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX navlinks_nav_links_order_idx ON public.navlinks_nav_links USING btree (_order);


--
-- Name: navlinks_nav_links_parent_id_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX navlinks_nav_links_parent_id_idx ON public.navlinks_nav_links USING btree (_parent_id);


--
-- Name: payload_kv_key_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE UNIQUE INDEX payload_kv_key_idx ON public.payload_kv USING btree (key);


--
-- Name: payload_locked_documents_created_at_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX payload_locked_documents_created_at_idx ON public.payload_locked_documents USING btree (created_at);


--
-- Name: payload_locked_documents_global_slug_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX payload_locked_documents_global_slug_idx ON public.payload_locked_documents USING btree (global_slug);


--
-- Name: payload_locked_documents_rels_media_id_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX payload_locked_documents_rels_media_id_idx ON public.payload_locked_documents_rels USING btree (media_id);


--
-- Name: payload_locked_documents_rels_order_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX payload_locked_documents_rels_order_idx ON public.payload_locked_documents_rels USING btree ("order");


--
-- Name: payload_locked_documents_rels_parent_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX payload_locked_documents_rels_parent_idx ON public.payload_locked_documents_rels USING btree (parent_id);


--
-- Name: payload_locked_documents_rels_path_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX payload_locked_documents_rels_path_idx ON public.payload_locked_documents_rels USING btree (path);


--
-- Name: payload_locked_documents_rels_users_id_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX payload_locked_documents_rels_users_id_idx ON public.payload_locked_documents_rels USING btree (users_id);


--
-- Name: payload_locked_documents_rels_works_id_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX payload_locked_documents_rels_works_id_idx ON public.payload_locked_documents_rels USING btree (works_id);


--
-- Name: payload_locked_documents_updated_at_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX payload_locked_documents_updated_at_idx ON public.payload_locked_documents USING btree (updated_at);


--
-- Name: payload_migrations_created_at_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX payload_migrations_created_at_idx ON public.payload_migrations USING btree (created_at);


--
-- Name: payload_migrations_updated_at_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX payload_migrations_updated_at_idx ON public.payload_migrations USING btree (updated_at);


--
-- Name: payload_preferences_created_at_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX payload_preferences_created_at_idx ON public.payload_preferences USING btree (created_at);


--
-- Name: payload_preferences_key_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX payload_preferences_key_idx ON public.payload_preferences USING btree (key);


--
-- Name: payload_preferences_rels_order_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX payload_preferences_rels_order_idx ON public.payload_preferences_rels USING btree ("order");


--
-- Name: payload_preferences_rels_parent_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX payload_preferences_rels_parent_idx ON public.payload_preferences_rels USING btree (parent_id);


--
-- Name: payload_preferences_rels_path_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX payload_preferences_rels_path_idx ON public.payload_preferences_rels USING btree (path);


--
-- Name: payload_preferences_rels_users_id_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX payload_preferences_rels_users_id_idx ON public.payload_preferences_rels USING btree (users_id);


--
-- Name: payload_preferences_updated_at_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX payload_preferences_updated_at_idx ON public.payload_preferences USING btree (updated_at);


--
-- Name: users_created_at_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX users_created_at_idx ON public.users USING btree (created_at);


--
-- Name: users_email_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE UNIQUE INDEX users_email_idx ON public.users USING btree (email);


--
-- Name: users_sessions_order_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX users_sessions_order_idx ON public.users_sessions USING btree (_order);


--
-- Name: users_sessions_parent_id_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX users_sessions_parent_id_idx ON public.users_sessions USING btree (_parent_id);


--
-- Name: users_updated_at_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX users_updated_at_idx ON public.users USING btree (updated_at);


--
-- Name: works_created_at_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX works_created_at_idx ON public.works USING btree (created_at);


--
-- Name: works_image_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX works_image_idx ON public.works USING btree (image_id);


--
-- Name: works_slug_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE UNIQUE INDEX works_slug_idx ON public.works USING btree (slug);


--
-- Name: works_tags_order_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX works_tags_order_idx ON public.works_tags USING btree (_order);


--
-- Name: works_tags_parent_id_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX works_tags_parent_id_idx ON public.works_tags USING btree (_parent_id);


--
-- Name: works_updated_at_idx; Type: INDEX; Schema: public; Owner: neondb_owner
--

CREATE INDEX works_updated_at_idx ON public.works USING btree (updated_at);


--
-- Name: ai_practices ai_practices_ai_video_demo_video_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.ai_practices
    ADD CONSTRAINT ai_practices_ai_video_demo_video_id_media_id_fk FOREIGN KEY (ai_video_demo_video_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: ai_practices ai_practices_ai_video_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.ai_practices
    ADD CONSTRAINT ai_practices_ai_video_image_id_media_id_fk FOREIGN KEY (ai_video_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: ai_practices ai_practices_meta_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.ai_practices
    ADD CONSTRAINT ai_practices_meta_image_id_media_id_fk FOREIGN KEY (meta_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: ai_practices_rels ai_practices_rels_media_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.ai_practices_rels
    ADD CONSTRAINT ai_practices_rels_media_fk FOREIGN KEY (media_id) REFERENCES public.media(id) ON DELETE CASCADE;


--
-- Name: ai_practices_rels ai_practices_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.ai_practices_rels
    ADD CONSTRAINT ai_practices_rels_parent_fk FOREIGN KEY (parent_id) REFERENCES public.ai_practices(id) ON DELETE CASCADE;


--
-- Name: buy_home buy_home_exploration_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.buy_home
    ADD CONSTRAINT buy_home_exploration_image_id_media_id_fk FOREIGN KEY (exploration_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: buy_home buy_home_meta_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.buy_home
    ADD CONSTRAINT buy_home_meta_image_id_media_id_fk FOREIGN KEY (meta_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: buy_home buy_home_process_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.buy_home
    ADD CONSTRAINT buy_home_process_image_id_media_id_fk FOREIGN KEY (process_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: buy_home_rels buy_home_rels_media_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.buy_home_rels
    ADD CONSTRAINT buy_home_rels_media_fk FOREIGN KEY (media_id) REFERENCES public.media(id) ON DELETE CASCADE;


--
-- Name: buy_home_rels buy_home_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.buy_home_rels
    ADD CONSTRAINT buy_home_rels_parent_fk FOREIGN KEY (parent_id) REFERENCES public.buy_home(id) ON DELETE CASCADE;


--
-- Name: buy_home_rels buy_home_rels_works_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.buy_home_rels
    ADD CONSTRAINT buy_home_rels_works_fk FOREIGN KEY (works_id) REFERENCES public.works(id) ON DELETE CASCADE;


--
-- Name: car_comparison car_comparison_floor_testing_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.car_comparison
    ADD CONSTRAINT car_comparison_floor_testing_image_id_media_id_fk FOREIGN KEY (floor_testing_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: car_comparison car_comparison_floor_testing_redirect_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.car_comparison
    ADD CONSTRAINT car_comparison_floor_testing_redirect_image_id_media_id_fk FOREIGN KEY (floor_testing_redirect_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: car_comparison car_comparison_meta_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.car_comparison
    ADD CONSTRAINT car_comparison_meta_image_id_media_id_fk FOREIGN KEY (meta_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: car_comparison car_comparison_problem_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.car_comparison
    ADD CONSTRAINT car_comparison_problem_image_id_media_id_fk FOREIGN KEY (problem_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: car_comparison car_comparison_problem_video_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.car_comparison
    ADD CONSTRAINT car_comparison_problem_video_id_media_id_fk FOREIGN KEY (problem_video_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: car_comparison_rels car_comparison_rels_media_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.car_comparison_rels
    ADD CONSTRAINT car_comparison_rels_media_fk FOREIGN KEY (media_id) REFERENCES public.media(id) ON DELETE CASCADE;


--
-- Name: car_comparison_rels car_comparison_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.car_comparison_rels
    ADD CONSTRAINT car_comparison_rels_parent_fk FOREIGN KEY (parent_id) REFERENCES public.car_comparison(id) ON DELETE CASCADE;


--
-- Name: car_comparison_rels car_comparison_rels_works_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.car_comparison_rels
    ADD CONSTRAINT car_comparison_rels_works_fk FOREIGN KEY (works_id) REFERENCES public.works(id) ON DELETE CASCADE;


--
-- Name: clear_trip_hero_tags clear_trip_hero_tags_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.clear_trip_hero_tags
    ADD CONSTRAINT clear_trip_hero_tags_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.clear_trip(id) ON DELETE CASCADE;


--
-- Name: clear_trip clear_trip_meta_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.clear_trip
    ADD CONSTRAINT clear_trip_meta_image_id_media_id_fk FOREIGN KEY (meta_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: clear_trip_rels clear_trip_rels_media_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.clear_trip_rels
    ADD CONSTRAINT clear_trip_rels_media_fk FOREIGN KEY (media_id) REFERENCES public.media(id) ON DELETE CASCADE;


--
-- Name: clear_trip_rels clear_trip_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.clear_trip_rels
    ADD CONSTRAINT clear_trip_rels_parent_fk FOREIGN KEY (parent_id) REFERENCES public.clear_trip(id) ON DELETE CASCADE;


--
-- Name: contacts_contacts contacts_contacts_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.contacts_contacts
    ADD CONSTRAINT contacts_contacts_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.contacts(id) ON DELETE CASCADE;


--
-- Name: ec_times_hero_tags ec_times_hero_tags_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.ec_times_hero_tags
    ADD CONSTRAINT ec_times_hero_tags_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.ec_times(id) ON DELETE CASCADE;


--
-- Name: ec_times ec_times_meta_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.ec_times
    ADD CONSTRAINT ec_times_meta_image_id_media_id_fk FOREIGN KEY (meta_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: ec_times_rels ec_times_rels_media_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.ec_times_rels
    ADD CONSTRAINT ec_times_rels_media_fk FOREIGN KEY (media_id) REFERENCES public.media(id) ON DELETE CASCADE;


--
-- Name: ec_times_rels ec_times_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.ec_times_rels
    ADD CONSTRAINT ec_times_rels_parent_fk FOREIGN KEY (parent_id) REFERENCES public.ec_times(id) ON DELETE CASCADE;


--
-- Name: home home_info_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.home
    ADD CONSTRAINT home_info_image_id_media_id_fk FOREIGN KEY (info_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: home home_meta_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.home
    ADD CONSTRAINT home_meta_image_id_media_id_fk FOREIGN KEY (meta_image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: home_rels home_rels_media_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.home_rels
    ADD CONSTRAINT home_rels_media_fk FOREIGN KEY (media_id) REFERENCES public.media(id) ON DELETE CASCADE;


--
-- Name: home_rels home_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.home_rels
    ADD CONSTRAINT home_rels_parent_fk FOREIGN KEY (parent_id) REFERENCES public.home(id) ON DELETE CASCADE;


--
-- Name: home_rels home_rels_works_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.home_rels
    ADD CONSTRAINT home_rels_works_fk FOREIGN KEY (works_id) REFERENCES public.works(id) ON DELETE CASCADE;


--
-- Name: media media_thumbnail_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.media
    ADD CONSTRAINT media_thumbnail_id_media_id_fk FOREIGN KEY (thumbnail_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: navlinks_nav_links navlinks_nav_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.navlinks_nav_links
    ADD CONSTRAINT navlinks_nav_links_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.navlinks(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_media_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_media_fk FOREIGN KEY (media_id) REFERENCES public.media(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_parent_fk FOREIGN KEY (parent_id) REFERENCES public.payload_locked_documents(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_users_fk FOREIGN KEY (users_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_works_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.payload_locked_documents_rels
    ADD CONSTRAINT payload_locked_documents_rels_works_fk FOREIGN KEY (works_id) REFERENCES public.works(id) ON DELETE CASCADE;


--
-- Name: payload_preferences_rels payload_preferences_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.payload_preferences_rels
    ADD CONSTRAINT payload_preferences_rels_parent_fk FOREIGN KEY (parent_id) REFERENCES public.payload_preferences(id) ON DELETE CASCADE;


--
-- Name: payload_preferences_rels payload_preferences_rels_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.payload_preferences_rels
    ADD CONSTRAINT payload_preferences_rels_users_fk FOREIGN KEY (users_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: users_sessions users_sessions_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.users_sessions
    ADD CONSTRAINT users_sessions_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: works works_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.works
    ADD CONSTRAINT works_image_id_media_id_fk FOREIGN KEY (image_id) REFERENCES public.media(id) ON DELETE SET NULL;


--
-- Name: works_tags works_tags_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.works_tags
    ADD CONSTRAINT works_tags_parent_id_fk FOREIGN KEY (_parent_id) REFERENCES public.works(id) ON DELETE CASCADE;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: neondb_owner
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

\unrestrict lq1eKZqWYrtuDB5SI8lv2USu1PAm6hBMDtdhvHss4fcV6IGiCv19iRw22wgkTpT

