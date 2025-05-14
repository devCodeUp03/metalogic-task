interface QualityInfo  {
    image: string,
    head: string,
    para: string
}


const qualityInfo: QualityInfo[] = [
    {
        image: "/quality/precisescoping.png",
        head: "Precise scoping",
        para: "We took great care to ensure that all software needs were fully specified, without any ambiguities or inconsistencies. This helps us precisely plan the project and avoid scope creep in the future."

    },
    {
        image: "/quality/accuratecost.png",
        head: "Accurate cost projection",
        para: "In order to provide our clients with accurate estimates, we compute the project cost after carefully reviewing the work breakdown structure and software needs."

    },
    {
        image: "/quality/managmentofquality.png",
        head: "Management of quality",
        para: "Every step of the SDLC is integrated with quality assurance (QA) at Metalogic, ensuring that there are no serious flaws in the final product. Our quality management strategy complies with ISO 9001 requirements."

    },
    {
        image: "/quality/robustsecurity.png",
        head: "Robust security",
        para: "We guarantee complete security for the project environment, digital assets and intellectual property belonging to our clients, and online software we develop."

    },
    {
        image: "/quality/adaptable.png",
        head: "Adaptable cooperation",
        para: "We adjust our rate and manner of our interactions in line with our clients' requests to ensure transparency and steady progress in projects related to web development."

    },
    {
        image: "/quality/projectpaper.png",
        head: "The whole set of project papers",
        para: "To enable future maintenance and modification of the program with ease, we meticulously record all significant choices made during the development process."

    },
]

export default qualityInfo;