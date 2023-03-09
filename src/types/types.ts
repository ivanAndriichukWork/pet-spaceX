export interface Dimensions {
    feet: number;
    meters: number;
}

export interface Thrust {
    kN: number;
    lbf: number;
}

export interface Engines {
    engine_loss_max: string;
    layout: string;
    number: number;
    propellant_1: string;
    propellant_2: string;
    thrust_sea_level: Thrust;
    thrust_to_weight: number;
    thrust_vacuum: Thrust;
    type: string;
    version: string;
}

export interface FirstStage {
    burn_time_sec: number;
    engines: number;
    fuel_amount_tons: number;
    reusable: boolean;
    thrust_sea_level: Thrust;
    thrust_vacuum: Thrust;
}

export interface LandingLegs {
    material?: any;
    number: number;
}

export interface Mass {
    kg: number;
    lb: number;
}

export interface PayloadWeight extends Mass {
    id: string;
    name: string;
}

export interface CompositeFairing {
    diameter: Dimensions;
    height: Dimensions;
}

export interface Payloads {
    composite_fairing: CompositeFairing;
    option_1: string;
}

export interface SecondStage {
    burn_time_sec: number;
    engines: number;
    fuel_amount_tons: number;
    payloads: Payloads;
    thrust: Thrust;
}

export interface Rocket {
    id: string;
    wikipedia: string;
    type: string;
    success_rate_pct: number;
    stages: number;
    name: string;
    first_flight: string;
    description: string;
    country: string;
    cost_per_launch: number;
    company: string;
    boosters: number;
    active: boolean;
    diameter: Dimensions;
    engines: Engines;
    first_stage: FirstStage;
    height: Dimensions;
    landing_legs: LandingLegs;
    mass: Mass;
    payload_weights: PayloadWeight[];
    second_stage: SecondStage;
}

export interface Mission extends MenuList {
}

export interface Ship extends MenuList {
}

export interface BodyRocketData {
    path: string
    id: string
    name: string
    height: number
    diameter:  number
    mass: number
}

export interface BodyMissionData {
    path: string
    id: string
    name: string
    payloads_length: number | 0
    payload_mass_max: number | 0
    payload_mass_min: number | 0
    payload_mass_total: number | 0
}

export interface BodyShipData {
    path: string
    id: string
    name: string
    image: string
    year_build: number
}

export interface BodyData {
    path: string
    id: string
    name: string
    height: {
        meters: number
    }
    diameter: {
        meters: number
    }
    mass: {
        kg: number
    }
    payloads_length: number | 0
    payload_mass_max: number | 0
    payload_mass_min: number | 0
    payload_mass_total: number | 0
}

export interface MenuList {
    id: string;
    name: string;
    height: {
        meters: number
    }
    diameter: {
        meters: number
    }
    mass: {
        kg: number
    }
    mission_name: string;
    rocket : any;
    payloads: Payloads[] | null
    image : string
    year_built: number
}

export interface Payloads {
    payload_mass_kg: number | null
    payload_mass_lbs: number | null
}

export interface Data {
    spacex: {
        rockets: Rocket[] | MenuList[];
        missions: Mission[] | MenuList[];
        ships: Ship[] | MenuList[]
    }
}
