---
sidebar_position: 1
id: intro
title: Project Aria Tools
---

# Project Aria Tools

Project Aria Tools provides open tooling to support researchers expand the horizons of Augmented Reality, Machine Perception and Artificial Intelligence.

This wiki provides documentation to support research using Project Aria data or the Aria Research Kit (Aria glasses and access to cloud services).

Aria data includes raw sensor data collected with Aria glasses and derived data generated by our Machine Perception Services (MPS). We also publish multiple open datasets captured by or simulating Aria glasses.


## Further resources
* [projectaria.com](https://projectaria.com/) - about the project, how to partner with Project Aria, learn about Grand Challenges and download datasets
* [Project Aria: A New Data Platform for Egocentric Multi-modal AI Research](https://arxiv.org/abs/2308.13561) - Project Aria Whitepaper
* [VRS (Vision Replay System)](https://github.com/facebookresearch/vrs) - A file format optimized to record and playback streams of sensor data, stored in per-device streams of timestamped records
* [EgoBlur](https://www.projectaria.com/tools/egoblur/) - an open source AI model from Meta to preserve privacy by detecting and blurring PII from images


## Overview of sections

* [Technical Specifications](/docs/tech_spec/tech_spec.mdx): hardware specifications, the different configurations Aria glasses can use for recording and an overview of extrinsics and intrinsics calibration.

* [Data Formats](/docs/data_formats/data_formats.mdx): information about data formatting conventions used with Aria raw sensor data (stored in VRS files) as well as [Machine Perception Services (MPS) data](/docs/ARK/mps/mps.mdx).

* [Data Utilities](/docs/data_utilities/data_utilities.mdx): our opensource C++/Python library provides the ability to work with Aria raw sensor data as well as MPS data. We also provide binaries implemented in C++ to visualize the data.
   * If you want to immediately dive in with the code, go to the Python [Getting Started](/docs/data_utilities/getting_started.mdx) guide for a quick tour of the library in a Jupyter notebook.

* [Aria Research Kit](/docs/ARK/about_ARK.mdx): Project Aria glasses quickstart guide, the Companion apps, the Client SDK or request Machine Perception Services.

* [Open Datasets](/docs/open_datasets/open_datasets.mdx), how to download the data and use our opensource tooling to visualize and access the data of:
    * [Aria Everyday Activities dataset](/open_datasets/aria_everyday_activities_dataset/aria_everyday_activities_dataset.mdx)
    * [Aria Digital Twin dataset](/open_datasets/aria_digital_twin_dataset/aria_digital_twin_dataset.mdx)
    * [Aria Synthetic Environments dataset](/open_datasets/aria_synthetic_environments_dataset/aria_synthetic_environments_dataset.mdx)

* [Tech Insights](/docs/tech_insights/tech_insights.mdx): technical deeper dives on domain-specific topics.

* [Attribution and Contributing](/docs/attribution_citation/attribution_citation.mdx): Citation information and how to contribute to Project Aria Tools.

* [Support](/support.mdx)

## SW Release Notes
Project Aria Tools SW Release notes are posted to [Project Aria Tools GitHub repository](https://github.com/facebookresearch/projectaria_tools), using Tags > Releases.

Release notes for the Aria Research Kit (requires Aria glasses) are posted to the [ARK Release Notes section](/docs/ARK/sw_release_notes.mdx) of this wiki.
