--
-- PostgreSQL database dump
--

\restrict yA8SLwXGxNl15WFewTkduIOgasxsn92ZquVecbwRjRXFBVuvHLqITW2Ri7R1gxk

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
    created_at timestamp(3) with time zone,
    process_image_id integer
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
    hypothesis_title character varying DEFAULT ''::character varying NOT NULL,
    hypothesis_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    exploration_title character varying DEFAULT ''::character varying NOT NULL,
    exploration_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    exploration_iframe character varying DEFAULT ''::character varying NOT NULL,
    floor_testing_title character varying DEFAULT ''::character varying NOT NULL,
    floor_testing_content jsonb DEFAULT '{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}'::jsonb NOT NULL,
    floor_testing_image_id integer,
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
    created_at timestamp(3) with time zone,
    problem_video_id integer,
    problem_image_id integer,
    floor_testing_redirect_image_id integer
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

COPY public.ai_practices (id, hero_title, hero_content, ai_content_title, ai_content_content, ai_video_title, ai_video_content, ai_video_image_id, ai_prototyping_title, ai_prototyping_content, meta_title, meta_description, meta_image_id, updated_at, created_at) FROM stdin;
1	AI Practices	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Over the past few years, I’ve integrated AI tools into my daily design work. It’s helped me spark new ideas, communicate more effectively, and make sense of complex information. And also turn concepts into real, tangible experiences. I use AI across different domains, from content and imagery to rapid prototyping, enabling me to do more and stay creative sustainably.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	AI + Content	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "AI is embedded in my workflow, not just for drafting, but for structuring ambiguous information, synthesizing feedback patterns, and accelerating iteration. I’ve built custom tooling, including a Figma plug-in powered by GPT and Claude to extract and systematize content strings. While AI expands speed and surface area, judgment, framing, and decision quality remain human-owned.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	AI + Video	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "I built an AI-powered content engine leveraging Google Veo for video generation and Stitch for rapid visual composition. The system translated structured prompts into production-ready content flows, reducing manual editing overhead and accelerating creative turnaround. The focus wasn’t just generation, but controllability, ensuring outputs aligned with narrative intent and product context.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	22	AI + Prototyping	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "I use AI-native development tools like Vercel, Claude, and Figma Make to move from idea to working software quickly. I build functional flows to test logic, edge cases, and interaction behaviour in real conditions. These newer AI-assisted environments have significantly reduced the gap between concept and executable product. They allow me to iterate faster, validate assumptions earlier, and think directly in systems rather than screens.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	AI Practices | Utk-Folio	I use AI across different domains, from content and imagery to rapid prototyping, enabling me to do more and stay creative sustainably.	22	2026-03-05 09:01:26.328+00	2026-03-04 20:38:22.672+00
\.


--
-- Data for Name: ai_practices_rels; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.ai_practices_rels (id, "order", parent_id, path, media_id) FROM stdin;
5	1	1	aiVideo.videos	13
6	2	1	aiVideo.videos	14
\.


--
-- Data for Name: buy_home; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.buy_home (id, hero_title, hero_content, process_title, process_content, process_iframe, analysis_title, analysis_content, analysis_iframe, strategy_title, strategy_content, strategy_iframe, exploration_title, exploration_content, exploration_image_id, final_designs_title, final_designs_content, outcome_title, outcome_content, reflections_title, reflections_content, meta_title, meta_description, meta_image_id, updated_at, created_at, process_image_id) FROM stdin;
1	Optimising mid-funnel conversion	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h4", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "How might we design Spinny’s Buy Homepage as a seamless hub for used-car transaction updates and action management for transactional users?", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Transactional users are those who had already scheduled a test drive or progressed toward booking, were returning to a homepage that did not reflect their stage in the journey.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "The previous UX treated committed users the same as exploratory users and this created ambiguity at a revenue sensitive stage of the funnel.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	Process	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Problem ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Users who scheduled a test drive could not see their transaction stage on the homepage. Visit details, booking status, and next steps were missing, forcing users to check profiles or external messages.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Time-to-Visit (T2V) averaged (48 hours), visit-to-delivery (V2D) had plateaued, and drop-offs peaked between scheduling and showroom visit.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Approach", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Rather than treating this as a visual refresh, I framed it as a lifecycle continuity issue. The core question became: how might we transform the homepage from a discovery surface into a state-aware checkpoint for transactional users?", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	https://www.figma.com/design/kREifhWpJXOrfuRhRkRxQ7/Buy-Home-Page?node-id=26-48&t=IefaVzh04fgtOwqJ-1	Analysis	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Lifecycle mapping", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "I mapped the transactional lifecycle across four stages: test drive scheduled, visit confirmed, booking completed, and delivery pending, to identify gaps between user intent and system response. ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "The greatest friction occurred between scheduling and showroom visit, where committed users received no visible reinforcement of progress or clarity on next steps, increasing cognitive load and delaying action.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "\\t", "type": "tab", "style": "", "detail": 2, "format": 0, "version": 1}, {"mode": "normal", "text": "\\t", "type": "tab", "style": "", "detail": 2, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	https://docs.google.com/spreadsheets/d/17g-SkxWHH65NfJQECCaTYZXHoGXw_uPWw1Y_SjjLPC8/edit?usp=sharing	Strategy & Limitations	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Hypothesis", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "I hypothesized that if the homepage dynamically reflected a user’s transaction state and surfaced the most relevant next action, we could reduce cognitive load, shorten the time between scheduling and visit, and improve downstream delivery conversion.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Constraints", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "The solution needed to operate within ReactJS performance limitations, which restricted complex interaction patterns. A dedicated transaction dashboard already existed under the Profile section and was owned by the Platform team, limiting structural reorganization. Leadership expressed concern about temporary conversion drops due to major interface changes. The redesign had to be delivered within a four-week window.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	https://www.figma.com/design/kREifhWpJXOrfuRhRkRxQ7/Buy-Home-Page?node-id=74-286&t=IefaVzh04fgtOwqJ-1	Exploration & Tradeoffs	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "We explored three approaches: enhancing banners within the existing layout, introducing a dedicated transactional dashboard, and adapting the homepage contextually by lifecycle state. Banner enhancements were low effort but insufficient for stage clarity, while a separate dashboard risked fragmentation and ownership conflict. We selected a state-aware homepage to preserve continuity while improving visibility. A snappable swipe interaction was explored but deprioritized due to performance limits and cognitive overhead, prioritizing clarity over novelty.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	18	Final Designs	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "The redesigned homepage dynamically adapts based on the user’s transaction stage. For users who have scheduled a test drive, the interface prominently surfaces visit details and next actions. For users who have completed booking, the homepage shifts focus toward delivery tracking and reassurance.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [], "direction": null, "textStyle": "", "textFormat": 0}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "A new status tag component was introduced to standardize stage visibility. Content prioritization became intent-driven rather than generic. Redundant modules were reduced to prevent distraction from high-intent actions.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "The homepage now distinguishes between exploratory and  committed behaviors.", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 1}], "direction": null, "textFormat": 1}}	Outcome	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Following launch, key lifecycle metrics demonstrated measurable improvements across progression speed and downstream conversion:", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Time-to-Visit (T2V): reduced by 5.14%", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "User-to-Visit (U2V): uplift of 3.6%", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "User-to-Delivery (U2D): increased by 3.2%", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}], "listType": "bullet", "direction": null, "textFormat": 1}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "The reduction in time-to-visit shortened booking cycles and improved operational predictability across deliveries.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	Reflections	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "This project reinforced that transactional users value progression clarity over feature depth. Designing for committed intent required structural restraint and contextual visibility rather than interface novelty. Working within technical and organizational constraints sharpened my approach to system design prioritizing clarity, continuity, and measurable business impact over interaction complexity.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	Optimising mid-funnel buyer decision | Utk-folio	How might we design Spinny’s Buy Homepage as a seamless hub for used-car transaction updates and action management for transactional users?	7	2026-03-06 14:09:39.482+00	2026-03-04 20:32:27.788+00	34
\.


--
-- Data for Name: buy_home_rels; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.buy_home_rels (id, "order", parent_id, path, media_id, works_id) FROM stdin;
135	1	1	finalDesigns.images	28	\N
136	2	1	finalDesigns.images	30	\N
137	3	1	finalDesigns.images	29	\N
138	1	1	moreWork.works	\N	3
139	2	1	moreWork.works	\N	1
\.


--
-- Data for Name: car_comparison; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.car_comparison (id, hero_title, hero_content, opportunity_title, opportunity_content, opportunity_iframe, problem_title, problem_content, hypothesis_title, hypothesis_content, exploration_title, exploration_content, exploration_iframe, floor_testing_title, floor_testing_content, floor_testing_image_id, final_designs_title, final_designs_content, outcome_title, outcome_content, reflections_title, reflections_content, meta_title, meta_description, meta_image_id, updated_at, created_at, problem_video_id, problem_image_id, floor_testing_redirect_image_id) FROM stdin;
1	Comparison feature adding decision speed	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h4", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Spinny did not have a comparison experience. Users evaluating multiple cars manually navigated between detail pages to assess differences.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "After identifying a recurring high intent evaluation behaviour, I led the design and rollout of the platform’s first structured comparison system. The solution was validated through floor testing and a large-scale A/B experiment (~238K users), improving progression across test drive, token, and delivery.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	Opportunity	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h4", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "While analysing navigation sequences, I observed a consistent oscillation pattern: This behaviour signalled re-evaluation, not casual browsing.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Back-testing revealed that users exhibiting this pattern contributed to (49% of total monthly test drives), disproportionately representing high-intent evaluators.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "This indicated comparison was already happening, unsupported and cognitively heavy.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	https://docs.google.com/spreadsheets/d/1j2Ub9CmMJBhUeL0mZ7_gGwkq6L0U7HZY2x4DGevcBxM/edit?usp=sharing	Problem	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "High-intent users were:", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Retaining specifications in working memory", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Switching between PDP’s repeatedly", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Comparing non-prioritized attributes", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}], "listType": "number", "direction": null, "textFormat": 1}, {"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "There was no structured hierarchy to guide tradeoffs between key variables like price, EMI, mileage, or ownership.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "The system provided information.  It did not support decision-making.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	Hypothesis	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Introducing a structured comparison layer for behaviourally identified evaluators would:", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Reduce cognitive strain", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Improve interpretation clarity", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Increase downstream progression quality", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}], "listType": "number", "direction": null, "textFormat": 1}], "direction": null, "textFormat": 1}}	Exploration & Tradeoffs	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Structural Variants Explored", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Flat Spec Grid", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 1, "version": 1, "children": [{"mode": "normal", "text": "Equal-weight parameters.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 1, "version": 1, "children": [{"mode": "normal", "text": "Rejected due to cognitive overload and low scan efficiency.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "number", "direction": null}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Card-Based Comparison", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 1, "version": 1, "children": [{"mode": "normal", "text": "Visually simplified but reduced cross-attribute scannability", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "number", "direction": null}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Hierarchical Comparison Model (Selected)", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 1, "version": 1, "children": [{"mode": "normal", "text": "Primary attributes surfaced first (Price, EMI, Ownership, Mileage)", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 1, "version": 1, "children": [{"mode": "normal", "text": "Secondary specifications grouped logically", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 1, "version": 1, "children": [{"mode": "normal", "text": "Differences highlighted conditionally", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 1, "version": 1, "children": [{"mode": "normal", "text": "Density preserved while introducing hierarchy", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "number", "direction": null}], "direction": null}], "listType": "number", "direction": null}], "direction": null}}	https://www.figma.com/design/FIddV7RDKsj10hEeixk2Z3/Car-Comparison?node-id=8133-46332&t=GTZOHmHfs8X6Hc40-1	Floor Testing (Validation)	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Before launching the experiment, I conducted in-person hub testing with - 10 active evaluators, comparing two structural variants.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "The key distinction tested was scale logic:", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Variant 1: Independent scales per parameter", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Variant 2: Consistent normalized scale across attributes", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}], "listType": "number", "direction": null, "textFormat": 1}, {"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Observations", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Users consistently reported Variant 2 as clearer due to scale consistency.", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Decision confidence improved when differences were visually normalized.", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Users made quicker choices when primary attributes were visually emphasized.", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Minor feedback led to refinements in header prominence and summary density.", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}], "listType": "number", "direction": null, "textFormat": 1}], "direction": null}}	19	Final Designs	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "The experience was triggered dynamically for users exhibiting the A → B → A pattern.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h6", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "No explicit “Compare” CTA was introduced to avoid artificial adoption bias.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Randomized A/B test", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "~238K eligible users", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Metrics measured at user level", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "number", "direction": null}], "direction": null}}	Outcome	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Uplift increased deeper in the funnel, suggesting improved decision quality rather than surface engagement growth.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Business Metrics", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "User-to-test drive scheduled (U2Tds): uplift of ↑1.6%", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "User-to-token (U2T): uplift of ↑3.8%", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "User-to-Delivery (U2D): uplift of ↑5.3%", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}], "listType": "bullet", "direction": null, "textFormat": 1}, {"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Key User Metrics (Turn around Time)", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"tag": "ul", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Time to Token (T2T) : (down by ↓12.4%)", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Time to Visit (T2V) : (down by ↓8.3%)", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textFormat": 1}], "listType": "bullet", "direction": null, "textFormat": 1}], "direction": null, "textFormat": 1}}	Reflections	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "By structuring evaluation around weighted decision variables rather than flat information display, the system reduced cognitive friction for high-intent users and improved downstream qualification. ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"type": "linebreak", "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "High-intent comparison behaviour was already present in the system. The opportunity was not to create demand, but to support it with decision architecture.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	Comparison feature enabling decision speed | Utk-folio	Spinny did not have a comparison experience. Users evaluating multiple cars manually navigated between detail pages to assess differences.	8	2026-03-06 14:06:53.323+00	2026-03-04 20:35:58.273+00	32	33	8
\.


--
-- Data for Name: car_comparison_rels; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.car_comparison_rels (id, "order", parent_id, path, media_id, works_id) FROM stdin;
134	1	1	finalDesigns.images	27	\N
135	2	1	finalDesigns.images	26	\N
136	3	1	finalDesigns.images	25	\N
137	1	1	moreWork.works	\N	4
138	2	1	moreWork.works	\N	2
\.


--
-- Data for Name: clear_trip; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.clear_trip (id, hero_title, problem_title, problem_content, challenge_title, challenge_content, impact_title, impact_content, impact_redirect_link, meta_title, meta_description, meta_image_id, updated_at, created_at) FROM stdin;
1	Reducing drop offs at Payment Funnel	Problem	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "A significant drop-off was occurring in the payment journey, particularly after users reviewed their trip summary.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"type": "linebreak", "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "Despite a simple 3-step flow (Review → Add Traveller → Pay), nearly 1,600 users were bouncing at the trip summary stage. Limited visibility of price breakdowns and unclear coupon confirmation reduced trust and weakened purchase motivation at the final step.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	Challenge	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Improve pricing transparency without adding friction or visual clutter.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Reinforce cost clarity and coupon confirmation to reduce last-mile hesitation.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Reduce drop-offs while maintaining a fast, streamlined checkout experience.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 4, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Increase completion rates without increasing cognitive load in a high-intent flow.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "number", "direction": null}], "direction": null}}	Impact	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "ol", "type": "list", "start": 1, "format": "", "indent": 0, "version": 1, "children": [{"type": "listitem", "value": 1, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Reduced payment-stage drop-offs and improved funnel progression.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 2, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Strengthened user trust through clearer pricing and confirmation signals.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "listitem", "value": 3, "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Increased checkout completion, directly contributing to higher transaction conversion.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "listType": "number", "direction": null}], "direction": null}}	https://www.figma.com/proto/AaHU2t1WEMeJGvbdhi2kk7/Payments-page-Revamp?node-id=1826-1845&t=BU9KR1vWg6DsIfmq-1&scaling=scale-down-width&content-scaling=fixed&page-id=1517%3A56651&starting-point-node-id=1826%3A1845	Reducing drop offs at Payment Funnel | Utk-folio	\N	\N	2026-03-06 14:52:08.564+00	2026-03-06 14:45:17.394+00
\.


--
-- Data for Name: clear_trip_hero_tags; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.clear_trip_hero_tags (_order, _parent_id, id, keyword) FROM stdin;
1	1	69aae7e6c74c3f178cdc32dc	Mobile App
2	1	69aae805c74c3f178cdc32de	PWA
3	1	69aae807c74c3f178cdc32e0	Experience Revamp
\.


--
-- Data for Name: clear_trip_rels; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.clear_trip_rels (id, "order", parent_id, path, media_id) FROM stdin;
7	1	1	hero.images	40
8	2	1	hero.images	39
9	3	1	hero.images	35
10	4	1	hero.images	38
11	5	1	hero.images	36
12	6	1	hero.images	37
\.


--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.contacts (id, content, updated_at, created_at) FROM stdin;
1	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h5", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "For new work enquiries or if you just want to say a hello - drop me a message. ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}], "direction": null}}	2026-03-05 09:31:21.859+00	2026-03-04 20:27:02.037+00
\.


--
-- Data for Name: contacts_contacts; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.contacts_contacts (_order, _parent_id, id, name, href, type) FROM stdin;
1	1	69a895725377d66a1a55e895	utkarshraj***0@gmail.com	mailto:utkarshraj7540@gmail.com	copy
2	1	69a895735377d66a1a55e897	Linkedin	https://linkedin.com/in/utkarsh-raj-299386191	link
3	1	69a895805377d66a1a55e899	Send coffee	https://calendar.google.com/calendar/render?add=utkarshraj7540@gmail.com&action=TEMPLATE&text=Catch Up	link
\.


--
-- Data for Name: ec_times; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.ec_times (id, hero_title, problem_title, problem_content, challenge_title, challenge_content, impact_title, impact_content, impact_redirect_link, meta_title, meta_description, meta_image_id, updated_at, created_at) FROM stdin;
1	Improving ET Prime feature discoverability	Problem	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ET Prime subscribers were paying for premium access but under-utilizing key features within the app. Low discoverability created a value perception gap, users couldn’t fully experience what they had already paid for, impacting engagement and long-term retention.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	Challenge	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Translating research insights into scalable product interventions required balancing usability, discovery, and business objectives within a content-first ecosystem.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"type": "linebreak", "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "Simplify onboarding while clearly communicating premium value, improving time-to-value without increasing drop-offs.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "Surface premium features contextually within a cluttered interface, enhancing visibility without disrupting core reading behaviour.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "Enable meaningful personalization using existing user signals, improving relevance without adding cognitive or UI overhead.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "Align feature discovery with user intent, embedding premium exploration into natural consumption journeys rather than forcing promotion.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	Impact	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "By aligning feature visibility with user behaviour, the redesign strengthened retention economics and demonstrated measurable business impact.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"type": "linebreak", "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "+28% increase in Prime user renewals, exceeding initial projections by 8% post-launch.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "Growth in new subscriptions, indicating stronger value perception among users.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"type": "linebreak", "version": 1}, {"mode": "normal", "text": "Improved engagement with premium features, reinforcing the ROI of the subscription model.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	https://www.figma.com/proto/aTR4rObDbhSFkR7KoDOiOS/Portfolio-Website?node-id=62-83&t=EcDlaxQr0arGC1bo-1&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=62%3A83	Improving ET Prime feature discoverability	\N	\N	2026-03-06 14:54:42.979+00	2026-03-06 14:54:31.029+00
\.


--
-- Data for Name: ec_times_hero_tags; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.ec_times_hero_tags (_order, _parent_id, id, keyword) FROM stdin;
1	1	69aaea26c74c3f178cdc32e2	Mobile App
2	1	69aaea29c74c3f178cdc32e4	Experience Improvement
\.


--
-- Data for Name: ec_times_rels; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.ec_times_rels (id, "order", parent_id, path, media_id) FROM stdin;
2	1	1	hero.images	41
\.


--
-- Data for Name: home; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.home (id, hero_title, hero_subtitle, hero_content, info_left_content, info_right_content, info_image_id, meta_title, meta_description, meta_image_id, updated_at, created_at) FROM stdin;
1	Utkarsh Raj	Senior Product Designer	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h4", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Hello! I’m a senior product design partner to founders and  tech companies.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "I help founders, tech companies, and fast-moving teams turn ideas into real products. My hands-on, practical approach builds momentum by keeping teams focused, communication clear, and projects moving forward.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h4", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "I help teams move fast.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "I design features, products and apps for ambitious teams and organisations who want to move quickly and build things that matter. Based in India, I help tech companies and startups turn ideas into valuable useful products with less friction.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h4", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "My approach.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "My approach is practical and momentum-driven. I keep projects organised and transparent, sharing updates via video walkthrough and keeping everyone aligned without endless meetings. I believe in open, honest communication. I share knowledge freely so we all can grow together. ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	23	Utkarsh Raj - Senior Product Designer | Portfolio	Senior product design partner to founders and tech companies. Turning ideas into real products with hands-on, practical approach.	15	2026-03-05 07:31:15.608+00	2026-03-04 20:30:03.895+00
\.


--
-- Data for Name: home_rels; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.home_rels (id, "order", parent_id, path, media_id, works_id) FROM stdin;
31	1	1	hero.workedAt	4	\N
32	2	1	hero.workedAt	2	\N
33	3	1	hero.workedAt	6	\N
34	4	1	hero.workedAt	3	\N
35	5	1	hero.workedAt	1	\N
36	6	1	hero.workedAt	5	\N
37	1	1	works.extendedCases	\N	4
38	2	1	works.extendedCases	\N	3
39	1	1	works.miniCases	\N	1
40	2	1	works.miniCases	\N	2
\.


--
-- Data for Name: media; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.media (id, alt, thumbnail_id, prefix, updated_at, created_at, url, thumbnail_u_r_l, filename, mime_type, filesize, width, height, focal_x, focal_y, sizes_preview_url, sizes_preview_width, sizes_preview_height, sizes_preview_mime_type, sizes_preview_filesize, sizes_preview_filename) FROM stdin;
1	Deloitte	\N	Logos	2026-03-04 20:09:12.438+00	2026-03-04 20:09:10.304+00	/api/media/file/deloitte.svg	/api/media/file/deloitte.svg	deloitte.svg	image/svg+xml	2488	129	36	\N	\N	\N	\N	\N	\N	\N	\N
2	The Economic Times	\N	Logos	2026-03-04 20:09:16.671+00	2026-03-04 20:09:13.122+00	/api/media/file/et.svg	/api/media/file/et.svg	et.svg	image/svg+xml	135857	223	36	\N	\N	\N	\N	\N	\N	\N	\N
3	Flipkart	\N	Logos	2026-03-04 20:09:20.136+00	2026-03-04 20:09:17.708+00	/api/media/file/flipkart.svg	/api/media/file/flipkart.svg	flipkart.svg	image/svg+xml	18491	129	36	\N	\N	\N	\N	\N	\N	\N	\N
4	Spinny	\N	Logos	2026-03-04 20:09:22.268+00	2026-03-04 20:09:20.804+00	/api/media/file/spinny.svg	/api/media/file/spinny.svg	spinny.svg	image/svg+xml	3216	129	36	\N	\N	\N	\N	\N	\N	\N	\N
5	Zostel	\N	Logos	2026-03-04 20:09:24.782+00	2026-03-04 20:09:22.943+00	/api/media/file/zostel.svg	/api/media/file/zostel.svg	zostel.svg	image/svg+xml	38049	129	36	\N	\N	\N	\N	\N	\N	\N	\N
6	Clear Trip	\N	Logos	2026-03-04 20:09:35.069+00	2026-03-04 20:09:32.848+00	/api/media/file/cleartrip.svg	/api/media/file/cleartrip.svg	cleartrip.svg	image/svg+xml	20709	129	36	\N	\N	\N	\N	\N	\N	\N	\N
7	Buy Home	\N	Works	2026-03-04 20:10:42.848+00	2026-03-04 20:10:39.364+00	/api/media/file/buy-home.webp	preview	buy-home.webp	image/webp	129048	3232	2160	50	50	/api/media/file/buy-home-400x267.webp	400	267	image/webp	7122	buy-home-400x267.webp
8	Car Comparison	\N	Works	2026-03-04 20:10:47.338+00	2026-03-04 20:10:44.737+00	/api/media/file/car-comparison.webp	preview	car-comparison.webp	image/webp	132480	3232	2160	50	50	/api/media/file/car-comparison-400x267.webp	400	267	image/webp	6844	car-comparison-400x267.webp
9	The Economic Times	\N	Works	2026-03-04 20:10:51.486+00	2026-03-04 20:10:49.556+00	/api/media/file/et-prime.webp	preview	et-prime.webp	image/webp	129518	3232	2160	50	50	/api/media/file/et-prime-400x267.webp	400	267	image/webp	7550	et-prime-400x267.webp
10	Payment Experience	\N	Works	2026-03-04 20:10:55.601+00	2026-03-04 20:10:52.632+00	/api/media/file/payment-experience.webp	preview	payment-experience.webp	image/webp	152352	1616	1080	50	50	/api/media/file/payment-experience-400x267.webp	400	267	image/webp	13482	payment-experience-400x267.webp
11	Honda CIty	\N	Videos	2026-03-04 20:11:56.001+00	2026-03-04 20:11:53.173+00	/api/media/file/honda_city.webp	preview	honda_city.webp	image/webp	16448	400	720	50	50	/api/media/file/honda_city-400x720.webp	400	720	image/webp	16448	honda_city-400x720.webp
12	Thar VIdeo Thumbnail	\N	Videos	2026-03-04 20:12:34.895+00	2026-03-04 20:12:31.417+00	/api/media/file/thar%20video.webp	preview	thar video.webp	image/webp	124320	1280	720	50	50	/api/media/file/thar%20video-400x225.webp	400	225	image/webp	19880	thar video-400x225.webp
13	Honda City VIdeo	11	Videos	2026-03-04 20:12:51.144+00	2026-03-04 20:12:45.543+00	/api/media/file/honda_city_video.webm	/api/media/file/honda_city_video.webm	honda_city_video.webm	video/webm	1576278	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
14	Thar VIdeo	12	Videos	2026-03-04 20:12:56.487+00	2026-03-04 20:12:51.783+00	/api/media/file/Thar_Video.webm	/api/media/file/Thar_Video.webm	Thar_Video.webm	video/webm	3161277	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
15	Utk Setup	\N	Home	2026-03-04 20:13:35.856+00	2026-03-04 20:13:32.765+00	/api/media/file/UtkSetup.webp	preview	UtkSetup.webp	image/webp	77944	1730	1738	50	50	/api/media/file/UtkSetup-400x402.webp	400	402	image/webp	15252	UtkSetup-400x402.webp
18	Buy Home Version	\N	BuyHome	2026-03-04 20:16:00.199+00	2026-03-04 20:15:57.199+00	/api/media/file/buy_home_version.webp	preview	buy_home_version.webp	image/webp	237048	3360	1712	50	50	/api/media/file/buy_home_version-400x204.webp	400	204	image/webp	11104	buy_home_version-400x204.webp
19	Car Comparison	\N	CarComparison	2026-03-04 20:17:26.022+00	2026-03-04 20:17:22.844+00	/api/media/file/Car%20Comparison%20Variants.webp	preview	Car Comparison Variants.webp	image/webp	192454	3360	1712	50	50	/api/media/file/Car%20Comparison%20Variants-400x204.webp	400	204	image/webp	8460	Car Comparison Variants-400x204.webp
22	AI Video Dashboard	\N	AIPractices	2026-03-04 20:38:19.292+00	2026-03-04 20:38:16.35+00	/api/media/file/Ai%20Video.webp	preview	Ai Video.webp	image/webp	68946	2880	1314	50	50	/api/media/file/Ai%20Video-400x183.webp	400	183	image/webp	4794	Ai Video-400x183.webp
23	Utk Info	\N	Home	2026-03-05 07:31:10.663+00	2026-03-05 07:31:05.39+00	/api/media/file/utk-info.webp	preview	utk-info.webp	image/webp	978328	2000	1332	50	50	/api/media/file/utk-info-400x266.webp	400	266	image/webp	11094	utk-info-400x266.webp
25	Car Comparison Entry 2	\N	CarComparison	2026-03-06 08:27:20.656+00	2026-03-06 08:27:17.229+00	/api/media/file/car_compare_entry_2.webp	preview	car_compare_entry_2.webp	image/webp	151760	1564	1738	50	50	/api/media/file/car_compare_entry_2-400x445.webp	400	445	image/webp	26578	car_compare_entry_2-400x445.webp
26	Car Comparison Entry 1	\N	CarComparison	2026-03-06 08:27:26.058+00	2026-03-06 08:27:22.412+00	/api/media/file/car_compare_entry_1.webp	preview	car_compare_entry_1.webp	image/webp	163722	3360	1738	50	50	/api/media/file/car_compare_entry_1-400x207.webp	400	207	image/webp	7396	car_compare_entry_1-400x207.webp
27	Car Comparison Final Design	\N	CarComparison	2026-03-06 08:27:31.468+00	2026-03-06 08:27:28.25+00	/api/media/file/car_compare_final.webp	preview	car_compare_final.webp	image/webp	275196	3360	1738	50	50	/api/media/file/car_compare_final-400x207.webp	400	207	image/webp	9066	car_compare_final-400x207.webp
28	Buy Home Final Design	\N	BuyHome	2026-03-06 08:27:35.283+00	2026-03-06 08:27:33.011+00	/api/media/file/buy_home_final.webp	preview	buy_home_final.webp	image/webp	123616	3360	1738	50	50	/api/media/file/buy_home_final-400x207.webp	400	207	image/webp	7704	buy_home_final-400x207.webp
29	Buy Home Before	\N	BuyHome	2026-03-06 08:27:39.493+00	2026-03-06 08:27:36.442+00	/api/media/file/buy_home_before.webp	preview	buy_home_before.webp	image/webp	93572	1250	1738	50	50	/api/media/file/buy_home_before-400x556.webp	400	556	image/webp	20726	buy_home_before-400x556.webp
30	Buy Home After	\N	BuyHome	2026-03-06 08:27:45.763+00	2026-03-06 08:27:42.548+00	/api/media/file/buy_home_after.webp	preview	buy_home_after.webp	image/webp	220994	3360	1738	50	50	/api/media/file/buy_home_after-400x207.webp	400	207	image/webp	11690	buy_home_after-400x207.webp
31	Car Comparison Thumbnail	\N	CarComparison	2026-03-06 08:57:01.827+00	2026-03-06 08:56:59.465+00	/api/media/file/car-compare-video-thumbnail.webp	preview	car-compare-video-thumbnail.webp	image/webp	7086	480	800	50	50	/api/media/file/car-compare-video-thumbnail-400x667.webp	400	667	image/webp	5874	car-compare-video-thumbnail-400x667.webp
32	Car Compare Video	31	CarComparison	2026-03-06 08:57:11.694+00	2026-03-06 08:57:05.962+00	/api/media/file/car-compare.webm	/api/media/file/car-compare.webm	car-compare.webm	video/webm	1953977	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
33	Compare User	\N	CarComparison	2026-03-06 14:01:31.819+00	2026-03-06 14:01:27.666+00	/api/media/file/comparing-user.webp	preview	comparing-user.webp	image/webp	142670	1042	1820	50	50	/api/media/file/comparing-user-400x699.webp	400	699	image/webp	40800	comparing-user-400x699.webp
34	Returning User	\N	BuyHome	2026-03-06 14:09:36.827+00	2026-03-06 14:09:33.861+00	/api/media/file/returning-user.webp	preview	returning-user.webp	image/webp	160240	1042	1820	50	50	/api/media/file/returning-user-400x699.webp	400	699	image/webp	43100	returning-user-400x699.webp
35	Clear Trip 2	\N	ClearTrip	2026-03-06 14:50:45.572+00	2026-03-06 14:50:42.255+00	/api/media/file/clear-trip-3.webp	preview	clear-trip-3.webp	image/webp	160450	4096	2304	50	50	/api/media/file/clear-trip-3-400x225.webp	400	225	image/webp	7656	clear-trip-3-400x225.webp
36	Clear Trip 4	\N	ClearTrip	2026-03-06 14:50:49.433+00	2026-03-06 14:50:47.006+00	/api/media/file/clear-trip-5.webp	preview	clear-trip-5.webp	image/webp	160320	4096	2304	50	50	/api/media/file/clear-trip-5-400x225.webp	400	225	image/webp	6860	clear-trip-5-400x225.webp
37	Clear Trip 6	\N	ClearTrip	2026-03-06 14:50:53.603+00	2026-03-06 14:50:50.778+00	/api/media/file/clear-trip-6.webp	preview	clear-trip-6.webp	image/webp	153672	4096	2304	50	50	/api/media/file/clear-trip-6-400x225.webp	400	225	image/webp	6600	clear-trip-6-400x225.webp
38	Clear Trip 3	\N	ClearTrip	2026-03-06 14:50:57.571+00	2026-03-06 14:50:54.944+00	/api/media/file/clear-trip-4.webp	preview	clear-trip-4.webp	image/webp	172334	4096	2304	50	50	/api/media/file/clear-trip-4-400x225.webp	400	225	image/webp	7072	clear-trip-4-400x225.webp
39	Clear Trip 2	\N	ClearTrip	2026-03-06 14:51:01.336+00	2026-03-06 14:50:59.061+00	/api/media/file/clear-trip-2.webp	preview	clear-trip-2.webp	image/webp	150566	4096	2304	50	50	/api/media/file/clear-trip-2-400x225.webp	400	225	image/webp	6906	clear-trip-2-400x225.webp
40	Clear Trip 1	\N	ClearTrip	2026-03-06 14:51:05.467+00	2026-03-06 14:51:03.191+00	/api/media/file/clear-trip-1.webp	preview	clear-trip-1.webp	image/webp	248242	4096	2304	50	50	/api/media/file/clear-trip-1-400x225.webp	400	225	image/webp	10540	clear-trip-1-400x225.webp
41	The Economic Times	\N	EcTimes	2026-03-06 14:53:18.177+00	2026-03-06 14:53:14.339+00	/api/media/file/ec-times.webp	preview	ec-times.webp	image/webp	394610	4096	2515	50	50	/api/media/file/ec-times-400x246.webp	400	246	image/webp	12700	ec-times-400x246.webp
\.


--
-- Data for Name: navlinks; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.navlinks (id, updated_at, created_at) FROM stdin;
1	2026-03-04 20:26:15.645+00	2026-03-04 20:26:15.645+00
\.


--
-- Data for Name: navlinks_nav_links; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.navlinks_nav_links (_order, _parent_id, id, title, href) FROM stdin;
1	1	69a895515377d66a1a55e88d	Work	/#works
2	1	69a895565377d66a1a55e88f	AI Practices	/ai-practices
3	1	69a895585377d66a1a55e891	Info	/#info
4	1	69a895605377d66a1a55e893	Contact	/#contact
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
53	car-comparison	2026-03-06 14:06:51.083+00	2026-03-06 14:01:33.578+00
26	ai-practices	2026-03-05 09:01:24.929+00	2026-03-05 09:00:23.618+00
9	home	2026-03-05 07:31:13.254+00	2026-03-05 07:29:38.27+00
\.


--
-- Data for Name: payload_locked_documents_rels; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.payload_locked_documents_rels (id, "order", parent_id, path, media_id, users_id, works_id) FROM stdin;
63	\N	53	user	\N	1	\N
10	\N	9	user	\N	1	\N
28	\N	26	user	\N	1	\N
\.


--
-- Data for Name: payload_migrations; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.payload_migrations (id, name, batch, updated_at, created_at) FROM stdin;
1	20260304_200638	1	2026-03-04 20:06:47.51+00	2026-03-04 20:06:47.507+00
3	20260306_083003	2	2026-03-06 08:41:45.336+00	2026-03-06 08:41:45.335+00
4	20260306_135643	3	2026-03-06 13:58:56.287+00	2026-03-06 13:58:56.286+00
5	20260306_140413	4	2026-03-06 14:30:31.858+00	2026-03-06 14:30:31.857+00
6	20260306_142723	4	2026-03-06 14:30:32.366+00	2026-03-06 14:30:32.366+00
7	20260306_143153	5	2026-03-06 14:32:07.299+00	2026-03-06 14:32:07.298+00
2	dev	-1	2026-03-06 14:38:25.374+00	2026-03-04 20:07:36.712+00
\.


--
-- Data for Name: payload_preferences; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.payload_preferences (id, key, value, updated_at, created_at) FROM stdin;
3	global-navlinks	{"editViewType": "default"}	2026-03-04 20:25:52.133+00	2026-03-04 20:25:51.738+00
4	global-contacts	{"editViewType": "default"}	2026-03-04 20:26:21.436+00	2026-03-04 20:26:21.065+00
5	global-home	{"editViewType": "default"}	2026-03-04 20:27:06.656+00	2026-03-04 20:27:06.286+00
1	collection-media	{"sort": "-prefix", "limit": 10, "editViewType": "default"}	2026-03-04 20:27:35.756+00	2026-03-04 20:08:07.621+00
6	global-buy-home	{"editViewType": "default"}	2026-03-04 20:30:09.601+00	2026-03-04 20:30:09.29+00
7	global-car-comparison	{"editViewType": "default"}	2026-03-04 20:33:06.599+00	2026-03-04 20:33:06.236+00
8	global-ai-practices	{"editViewType": "default"}	2026-03-04 20:36:03.531+00	2026-03-04 20:36:03.19+00
2	collection-works	{"limit": 10, "editViewType": "default"}	2026-03-05 18:35:03.534+00	2026-03-04 20:17:48.954+00
9	global-clear-trip	{"editViewType": "default"}	2026-03-06 14:41:38.115+00	2026-03-06 14:41:37.881+00
10	global-ec-times	{"editViewType": "default"}	2026-03-06 14:52:12.796+00	2026-03-06 14:52:12.541+00
\.


--
-- Data for Name: payload_preferences_rels; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.payload_preferences_rels (id, "order", parent_id, path, users_id) FROM stdin;
6	\N	3	user	1
7	\N	4	user	1
8	\N	5	user	1
9	\N	1	user	1
10	\N	6	user	1
11	\N	7	user	1
12	\N	8	user	1
13	\N	2	user	1
14	\N	9	user	1
15	\N	10	user	1
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.users (id, updated_at, created_at, email, reset_password_token, reset_password_expiration, salt, hash, login_attempts, lock_until) FROM stdin;
1	2026-03-06 08:36:01.45+00	2026-03-04 20:08:02.827+00	admin@mail.com	\N	\N	ca75634b34ddc09c231efed6f08e5244ad834ef5a2ef413432d6322fddb59281	f70f2802a5dc65b4c900e0ad170b9dc3ae416f65cb9e0d6a8d3a9e563bd896e5bf287358c9fc8f1ae46c5b4207716f0498e774f0db9dc4ecbcb88a9c7af454ca3d078c85dfdd6ecd9f09c27a37bf85ac8d88dcaea63bffa00f32d28a4a3079d9e4461c5b4bc1cc405b531f74dcf75a861ab0b3b195f264a205150b883dd0034409e7e990e17573da2a179f34c0ee7db85438889ab67a3b88ba360a1379868193fe3774c2c09f26eabb8acc65cb3277dd693c3722193791a24222170f8a62d364c7d1a83b8ee6622cbaaff7551ccf8146812d65ff21b626e568e603894115dcf02e6c07d5e5bc109f0230c511c9b9d4141ade243b6eb95029f30c8f171bd4a47fba5731ae0d452d3f9c496423fda54db1b6f279e3c8352b9674f2e8fd83ae5ee8db1588a31a76e7f3215b0a8e25b11986beba6de6275dc6eb09293bcc86c1e0d1f7bd67ca29ffb35621fbf454cb6eee8007e7abe1abafa354a96d5a3b39ff231066d1a662d18c1725004966dc7d944fe38514204de359b2582dd85a5eb6d986d3647551136f1164e9e4811265c8a3bdbd6ac09c869dd28f6cb25d5292fbf9d67e96ff463bbe5cd7b299cb31524ada01a8fc23914c8cc5a6eab462781c23d1ec83a3b86de5405a81c16ce560a2de6bbfab64485e716bfcc6ec09211e50594ecdd4bb16c21d3bb3fa73187c0c47754c2a115819f1055f83452fb6a7c039959cfa56	0	\N
\.


--
-- Data for Name: users_sessions; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.users_sessions (_order, _parent_id, id, created_at, expires_at) FROM stdin;
1	1	790afbd3-01e6-4440-8953-549b27927984	2026-03-06 13:17:18.047+00	2026-03-06 15:17:18.047+00
2	1	7a843fa7-3840-4045-ba38-2e86c544f7ba	2026-03-06 15:12:51.374+00	2026-03-06 17:12:51.374+00
\.


--
-- Data for Name: works; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.works (id, slug, title, description, image_id, link_href, link_target, updated_at, created_at) FROM stdin;
3	car-comparison	Comparison feature enabling decision speed	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Internally referred to as ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "“Used Car Comparison”", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	8	/work/car-comparison	_self	2026-03-04 20:24:33.333+00	2026-03-04 20:24:33.332+00
4	buy-home	Optimising mid-funnel \\n conversion	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Internally referred to as ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "“Buy Homepage”", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	7	/work/buy-home	_self	2026-03-05 07:53:45.195+00	2026-03-04 20:25:46.19+00
1	et-times	Improving ET Prime feature discoverability	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Internally referred to as ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "“ET Prime Discovery”", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	9	https://www.figma.com/proto/aTR4rObDbhSFkR7KoDOiOS/Portfolio-Website?node-id=62-83&t=EcDlaxQr0arGC1bo-1&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=62%3A83	_blank	2026-03-06 14:17:40.56+00	2026-03-04 20:21:46.566+00
2	clear-trip	Reducing drop offs at Payment Funnel	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Internally referred to as ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}, {"mode": "normal", "text": "“Payment Page Revamp”", "type": "text", "style": "", "detail": 0, "format": 1, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	10	https://www.figma.com/proto/AaHU2t1WEMeJGvbdhi2kk7/Payments-page-Revamp?node-id=1826-1845&t=BU9KR1vWg6DsIfmq-1&scaling=scale-down-width&content-scaling=fixed&page-id=1517%3A56651&starting-point-node-id=1826%3A1845	_blank	2026-03-06 14:18:08.448+00	2026-03-04 20:23:20.126+00
\.


--
-- Data for Name: works_tags; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.works_tags (_order, _parent_id, id, keyword) FROM stdin;
1	3	69a894ea5377d66a1a55e881	Mobile App
2	3	69a894f45377d66a1a55e883	PWA
3	3	69a894fb5377d66a1a55e885	New Feature
1	4	69a895395377d66a1a55e887	Mobile App
2	4	69a895415377d66a1a55e889	PWA
3	4	69a895455377d66a1a55e88b	Experience Revamp
1	1	69a894395377d66a1a55e877	Mobile App
2	1	69a894515377d66a1a55e879	Experience Improvement
1	2	69a894a65377d66a1a55e87b	Mobile App
2	2	69a894a95377d66a1a55e87d	PWA
3	2	69a894b35377d66a1a55e87f	Experience Revamp
\.


--
-- Name: ai_practices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.ai_practices_id_seq', 1, true);


--
-- Name: ai_practices_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.ai_practices_rels_id_seq', 6, true);


--
-- Name: buy_home_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.buy_home_id_seq', 1, true);


--
-- Name: buy_home_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.buy_home_rels_id_seq', 139, true);


--
-- Name: car_comparison_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.car_comparison_id_seq', 1, true);


--
-- Name: car_comparison_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.car_comparison_rels_id_seq', 138, true);


--
-- Name: clear_trip_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.clear_trip_id_seq', 1, true);


--
-- Name: clear_trip_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.clear_trip_rels_id_seq', 12, true);


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

SELECT pg_catalog.setval('public.ec_times_rels_id_seq', 2, true);


--
-- Name: home_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.home_id_seq', 1, true);


--
-- Name: home_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.home_rels_id_seq', 40, true);


--
-- Name: media_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.media_id_seq', 41, true);


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

SELECT pg_catalog.setval('public.payload_locked_documents_id_seq', 61, true);


--
-- Name: payload_locked_documents_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.payload_locked_documents_rels_id_seq', 73, true);


--
-- Name: payload_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.payload_migrations_id_seq', 7, true);


--
-- Name: payload_preferences_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.payload_preferences_id_seq', 10, true);


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

\unrestrict yA8SLwXGxNl15WFewTkduIOgasxsn92ZquVecbwRjRXFBVuvHLqITW2Ri7R1gxk

