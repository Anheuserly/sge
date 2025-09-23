import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from "recharts";
import {
  FaSearch, FaSort, FaSortUp, FaSortDown,
  FaProjectDiagram, FaChartPie, FaChartBar, FaDownload,
  FaFilter, FaSpinner, FaExclamationTriangle, FaMapMarkerAlt
} from "react-icons/fa";
import '../styles/ProjectsSection.css';

const COLORS = [
  "#4361ee", "#3a0ca3", "#7209b7", "#f72585", "#4cc9f0", 
  "#4895ef", "#560bad", "#b5179e", "#f15bb5", "#00bbf9"
];

// Manual project data
const MANUAL_PROJECT_DATA = [
  { project_name: "ADANI CONNEX", client_name: "Adani Connex, Voltas Ltd.", location: "Delhi", scope_of_work: "Electrical, Fire protection, detection, plumbing", additional_details: "Data center safety & operational efficiency", image: null },
  { project_name: "ICC, Dwarka", client_name: "L&T Constructions", location: "Dwarka, Delhi", scope_of_work: "Electrical, Fire protection, plumbing installations", additional_details: "World-class exhibition and conference center", image: null },
  { project_name: "Commercial Building Okhla", client_name: "CAPFI", location: "Okhla, Delhi", scope_of_work: "Electrical, Fire detection, plumbing", additional_details: "Advanced safety systems", image: null },
  { project_name: "SSB Building Super", client_name: "IMSSB", location: "Delhi", scope_of_work: "Electrical, Fire protection, detection, hydrants", additional_details: "Residential fire safety infrastructure", image: null },
  { project_name: "HSCC Project", client_name: "HSCC (INDIA) LIMITED", location: "Delhi", scope_of_work: "Electrical, Fire protection, plumbing", additional_details: "Healthcare facility safety & compliance", image: null },
  { project_name: "Hudda City Centre - DMRC", client_name: "Delhi Metro Rail Corporation", location: "Delhi", scope_of_work: "Electrical, Fire protection, plumbing", additional_details: "Metro infrastructure safety", image: null },
  { project_name: "DLF HOTEL & Apartment", client_name: "DLF Project Ltd.", location: "Delhi", scope_of_work: "Electrical, Fire protection, plumbing", additional_details: "Hospitality safety solutions", image: null },
  { project_name: "DLF Ltd. - DLF City", client_name: "DLF Ltd.", location: "Delhi", scope_of_work: "Electrical, Fire protection, plumbing", additional_details: "High-rise residential infrastructure", image: null },
  { project_name: "Mahagun Moderne", client_name: "Mahagun (INDIA) Pvt. Ltd.", location: "Delhi", scope_of_work: "Electrical, Fire protection, plumbing", additional_details: "Residential project safety", image: null },
  { project_name: "Mahagun Mywood", client_name: "Mahagun (INDIA) Pvt. Ltd.", location: "Delhi", scope_of_work: "Electrical, Fire protection, plumbing", additional_details: "Safety measures for residential development", image: null },
  { project_name: "200-Bedded Referral Hospital", client_name: "V3S Infratech", location: "Delhi", scope_of_work: "Electrical, Fire protection, plumbing", additional_details: "Healthcare infrastructure", image: null },
  { project_name: "AIIMS Underground Parking", client_name: "V3S Infratech", location: "Delhi", scope_of_work: "Electrical, Fire protection, plumbing", additional_details: "Safety compliance for public parking", image: null },
  { project_name: "AEPC", client_name: "Apparel Export Promotion Council", location: "Delhi", scope_of_work: "Electrical, Fire protection, plumbing", additional_details: "Government project", image: null },
  { project_name: "ATDC Vocational Institute", client_name: "Apparel Export Promotion Council", location: "Noida", scope_of_work: "Electrical, Fire protection, plumbing", additional_details: "Educational facility safety", image: null },
  { project_name: "Blue Bell Model School", client_name: "Blue Bells Group of Schools", location: "Gurgaon", scope_of_work: "Electrical, Fire protection, plumbing", additional_details: "School safety measures", image: null },
  { project_name: "Blue Bell Preparatory School", client_name: "Blue Bells Group of Schools", location: "Gurgaon", scope_of_work: "Electrical, Fire protection, plumbing", additional_details: "Safety infrastructure for primary education", image: null },
  { project_name: "Blue Bell Public School", client_name: "Blue Bells Group of Schools", location: "Gurgaon", scope_of_work: "Electrical, Fire protection, plumbing", additional_details: "Full-scale safety solutions", image: null },
  { project_name: "The Indian Express Building", client_name: "Indian Express Group", location: "Delhi", scope_of_work: "Electrical, Fire protection, plumbing", additional_details: "Media house safety infrastructure", image: null },
  { project_name: "Hydra Power Station", client_name: "Hydra Power Station, Obra", location: "Sonbhadra, U.P.", scope_of_work: "Electrical, Fire protection, plumbing", additional_details: "Energy sector infrastructure", image: null },
  { project_name: "S.N.S Hospital, Leh", client_name: "S.N.S Hospital", location: "Leh, Ladakh", scope_of_work: "Electrical, Fire protection, plumbing", additional_details: "Healthcare infrastructure", image: null },
  { project_name: "Sir Ganga Ram Hospital", client_name: "Sir Ganga Ram Hospital", location: "Delhi", scope_of_work: "Electrical, Fire protection, plumbing", additional_details: "Hospital fire safety", image: null },
  { project_name: "NBCC Building", client_name: "NBCC (INDIA) LIMITED", location: "Delhi", scope_of_work: "Electrical, Fire protection, plumbing", additional_details: "Government infrastructure", image: null },
  { project_name: "Air Force Station Tuglakabad", client_name: "Air Force Station", location: "Delhi", scope_of_work: "Electrical, Fire protection, plumbing", additional_details: "Military facility safety", image: null },
  { project_name: "F1-Info-Solution & Services", client_name: "Flipkart", location: "Delhi", scope_of_work: "Electrical, Fire protection, plumbing", additional_details: "E-commerce infrastructure", image: null },
  { project_name: "Kutub Hotel & Apartment", client_name: "Vadhera Builders", location: "Delhi", scope_of_work: "Electrical, Fire protection, plumbing", additional_details: "Hospitality infrastructure", image: null }
];

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [chartType, setChartType] = useState("pie");
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedClients, setSelectedClients] = useState([]);
  const [selectedScopes, setSelectedScopes] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(10);
  const [totalProjects, setTotalProjects] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  const headerRef = useRef(null);
  const projectsListRef = useRef(null);
  
  // Load manual data instead of fetching from Google Sheets
  useEffect(() => {
    try {
      setLoading(true);
      // Use the manual data
      setProjects(MANUAL_PROJECT_DATA);
      setTotalProjects(MANUAL_PROJECT_DATA.length);
      setLoading(false);
    } catch (error) {
      console.error("Error loading project data:", error);
      setError("Failed to load project data");
      setLoading(false);
    }
  }, []);

  // Apply filtering, sorting, and pagination
  useEffect(() => {
    let result = [...projects];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(project => 
        project.project_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.scope_of_work.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (project.additional_details && project.additional_details.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Apply location filter
    if (selectedLocations.length > 0) {
      result = result.filter(project => selectedLocations.includes(project.location));
    }
    
    // Apply client filter
    if (selectedClients.length > 0) {
      result = result.filter(project => selectedClients.includes(project.client_name));
    }
    
    // Apply scope filter
    if (selectedScopes.length > 0) {
      result = result.filter(project => selectedScopes.includes(project.scope_of_work));
    }
    
    // Apply sorting
    if (sortConfig.key) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    
    setFilteredProjects(result);
  }, [projects, searchTerm, sortConfig, selectedLocations, selectedClients, selectedScopes]);

  // Handle sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current && projectsListRef.current) {
        const { top } = projectsListRef.current.getBoundingClientRect();
        setIsSticky(top <= 0);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate chart data for locations
  const locationChartData = useMemo(() => {
    const locationCounts = filteredProjects.reduce((acc, project) => {
      acc[project.location] = (acc[project.location] || 0) + 1;
      return acc;
    }, {});
    
    return Object.keys(locationCounts)
      .map(location => ({
        name: location,
        value: locationCounts[location],
      }))
      .sort((a, b) => b.value - a.value); // Sort by count descending
  }, [filteredProjects]);

  // Calculate chart data for clients
  const clientChartData = useMemo(() => {
    const clientCounts = filteredProjects.reduce((acc, project) => {
      acc[project.client_name] = (acc[project.client_name] || 0) + 1;
      return acc;
    }, {});
    
    return Object.keys(clientCounts)
      .map(client => ({
        name: client,
        value: clientCounts[client],
      }))
      .sort((a, b) => b.value - a.value); // Sort by count descending
  }, [filteredProjects]);

  // Get unique locations, clients, and scopes for filters
  const uniqueLocations = useMemo(() => {
    return [...new Set(projects.map(project => project.location))].sort();
  }, [projects]);

  const uniqueClients = useMemo(() => {
    return [...new Set(projects.map(project => project.client_name))].sort();
  }, [projects]);

  const uniqueScopes = useMemo(() => {
    return [...new Set(projects.map(project => project.scope_of_work))].sort();
  }, [projects]);

  // Get current page projects
  const currentProjects = useMemo(() => {
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    return filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  }, [filteredProjects, currentPage, projectsPerPage]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Request sort
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    } else if (sortConfig.key === key && sortConfig.direction === 'descending') {
      key = null;
      direction = null;
    }
    setSortConfig({ key, direction });
  };

  // Get sort icon
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort className="sort-icon" />;
    if (sortConfig.direction === 'ascending') return <FaSortUp className="sort-icon active" />;
    return <FaSortDown className="sort-icon active" />;
  };

  // Toggle location filter
  const toggleLocationFilter = (location) => {
    setSelectedLocations(prev => 
      prev.includes(location)
        ? prev.filter(l => l !== location)
        : [...prev, location]
    );
    setCurrentPage(1); // Reset to first page when filtering
  };

  // Toggle client filter
  const toggleClientFilter = (client) => {
    setSelectedClients(prev => 
      prev.includes(client)
        ? prev.filter(c => c !== client)
        : [...prev, client]
    );
    setCurrentPage(1); // Reset to first page when filtering
  };

  // Toggle scope filter
  const toggleScopeFilter = (scope) => {
    setSelectedScopes(prev => 
      prev.includes(scope)
        ? prev.filter(s => s !== scope)
        : [...prev, scope]
    );
    setCurrentPage(1); // Reset to first page when filtering
  };

  // Export to CSV
  const exportToCSV = () => {
    const csvContent = [
      ['Project Name', 'Client Name', 'Location', 'Scope of Work', 'Additional Details'],
      ...filteredProjects.map(project => [
        project.project_name,
        project.client_name,
        project.location,
        project.scope_of_work,
        project.additional_details || ''
      ])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'projects_list.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Scroll to top of table
      if (projectsListRef.current) {
        projectsListRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
    // Custom tooltip for charts
    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <p className="tooltip-label">{`${payload[0].name}`}</p>
            <p className="tooltip-value">{`Projects: ${payload[0].value}`}</p>
            <p className="tooltip-percentage">
              {`(${((payload[0].value / filteredProjects.length) * 100).toFixed(1)}%)`}
            </p>
          </div>
        );
      }
      return null;
    };
  
    // View project details
    const viewProjectDetails = (project) => {
      setSelectedProject(project);
    };
  
    // Close project details modal
    const closeProjectDetails = () => {
      setSelectedProject(null);
    };
  
    return (
      <div className="projects-section" ref={projectsListRef}>
        <div className={`projects-header ${isSticky ? 'sticky' : ''}`} ref={headerRef}>
          <div className="projects-title">
            <FaProjectDiagram className="projects-icon" />
            <h2>Projects Directory</h2>
          </div>
          
          <div className="projects-actions">
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                className="search-box"
                placeholder="Search projects, clients, locations..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset to first page when searching
                }}
              />
              {searchTerm && (
                <button 
                  className="clear-search"
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
            
            <button 
              className="filter-button"
              onClick={() => setShowFilters(!showFilters)}
              aria-expanded={showFilters}
            >
              <FaFilter /> {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            
            <button className="export-button" onClick={exportToCSV}>
              <FaDownload /> Export
            </button>
          </div>
        </div>
        
        {showFilters && (
          <div className="filters-container">
            <div className="filter-section">
              <h3>Filter by Location</h3>
              <div className="filter-items">
                {uniqueLocations.map(location => (
                  <label key={location} className="filter-item">
                    <input
                      type="checkbox"
                      checked={selectedLocations.includes(location)}
                      onChange={() => toggleLocationFilter(location)}
                    />
                    <span className="filter-name">{location}</span>
                    <span className="filter-count">
                      ({projects.filter(p => p.location === location).length})
                    </span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="filter-section">
              <h3>Filter by Client</h3>
              <div className="filter-items">
                {uniqueClients.map(client => (
                  <label key={client} className="filter-item">
                    <input
                      type="checkbox"
                      checked={selectedClients.includes(client)}
                      onChange={() => toggleClientFilter(client)}
                    />
                    <span className="filter-name">{client}</span>
                    <span className="filter-count">
                      ({projects.filter(p => p.client_name === client).length})
                    </span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="filter-section">
              <h3>Filter by Scope of Work</h3>
              <div className="filter-items">
                {uniqueScopes.map(scope => (
                  <label key={scope} className="filter-item">
                    <input
                      type="checkbox"
                      checked={selectedScopes.includes(scope)}
                      onChange={() => toggleScopeFilter(scope)}
                    />
                    <span className="filter-name">{scope}</span>
                    <span className="filter-count">
                      ({projects.filter(p => p.scope_of_work === scope).length})
                    </span>
                  </label>
                ))}
              </div>
            </div>
            
            {(selectedLocations.length > 0 || selectedClients.length > 0 || selectedScopes.length > 0) && (
              <button 
                className="clear-filters"
                onClick={() => {
                  setSelectedLocations([]);
                  setSelectedClients([]);
                  setSelectedScopes([]);
                }}
              >
                Clear All Filters
              </button>
            )}
          </div>
        )}
        
        <div className="projects-stats">
          <div className="stat-card">
            <h3>Total Projects</h3>
            <p>{totalProjects}</p>
          </div>
          <div className="stat-card">
            <h3>Filtered Projects</h3>
            <p>{filteredProjects.length}</p>
          </div>
          <div className="stat-card">
            <h3>Unique Locations</h3>
            <p>{uniqueLocations.length}</p>
          </div>
          <div className="stat-card">
            <h3>Unique Clients</h3>
            <p>{uniqueClients.length}</p>
          </div>
        </div>
        
        {loading ? (
          <div className="loading-container">
            <FaSpinner className="loading-spinner" />
            <p>Loading projects data...</p>
          </div>
        ) : error ? (
          <div className="error-container">
            <FaExclamationTriangle className="error-icon" />
            <p>Error: {error}</p>
            <button 
              className="retry-button"
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          </div>
        ) : (
          <>
            <div className="table-container">
              {filteredProjects.length > 0 ? (
                <>
                  <table className="projects-table">
                    <thead>
                      <tr>
                        <th onClick={() => requestSort('project_name')}>
                          Project Name {getSortIcon('project_name')}
                        </th>
                        <th onClick={() => requestSort('client_name')}>
                          Client {getSortIcon('client_name')}
                        </th>
                        <th onClick={() => requestSort('location')}>
                          Location {getSortIcon('location')}
                        </th>
                        <th onClick={() => requestSort('scope_of_work')}>
                          Scope of Work {getSortIcon('scope_of_work')}
                        </th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentProjects.map((project, index) => (
                        <tr key={index} className="project-row">
                          <td>{project.project_name}</td>
                          <td>{project.client_name}</td>
                          <td>
                            <span className="location-badge">
                              <FaMapMarkerAlt className="location-icon" />
                              {project.location}
                            </span>
                          </td>
                          <td>
                            <span className="scope-badge" style={{
                              backgroundColor: COLORS[uniqueScopes.indexOf(project.scope_of_work) % COLORS.length]
                            }}>
                              {project.scope_of_work}
                            </span>
                          </td>
                          <td>
                            <button 
                              className="view-details-button"
                              onClick={() => viewProjectDetails(project)}
                            >
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                  <div className="pagination-container">
                    <div className="pagination-info">
                      Showing {Math.min(filteredProjects.length, (currentPage - 1) * projectsPerPage + 1)} - {Math.min(currentPage * projectsPerPage, filteredProjects.length)} of {filteredProjects.length} projects
                    </div>
                    
                    <div className="pagination-controls">
                      <button 
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1}
                        className="pagination-button"
                      >
                        First
                      </button>
                      <button 
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="pagination-button"
                      >
                        Previous
                      </button>
                      
                      <div className="pagination-pages">
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                          let pageNum;
                          if (totalPages <= 5) {
                            pageNum = i + 1;
                          } else if (currentPage <= 3) {
                            pageNum = i + 1;
                          } else if (currentPage >= totalPages - 2) {
                            pageNum = totalPages - 4 + i;
                          } else {
                            pageNum = currentPage - 2 + i;
                          }
                          
                          return (
                            <button 
                              key={pageNum}
                              onClick={() => handlePageChange(pageNum)}
                              className={`pagination-button ${currentPage === pageNum ? 'active' : ''}`}
                            >
                              {pageNum}
                            </button>
                          );
                        })}
                      </div>
                      
                      <button 
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="pagination-button"
                      >
                        Next
                      </button>
                      <button 
                        onClick={() => handlePageChange(totalPages)}
                        disabled={currentPage === totalPages}
                        className="pagination-button"
                      >
                        Last
                      </button>
                    </div>
                    
                    <div className="pagination-size">
                      <label>
                        Show 
                        <select
                          value={projectsPerPage}
                          onChange={(e) => {
                            setProjectsPerPage(Number(e.target.value));
                            setCurrentPage(1); // Reset to first page
                          }}
                        >
                          <option value={5}>5</option>
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                          <option value={100}>100</option>
                        </select>
                        per page
                      </label>
                    </div>
                  </div>
                </>
              ) : (
                <div className="no-results">
                  <p>No projects found matching your search criteria.</p>
                  {searchTerm && (
                    <button 
                      className="clear-search-button"
                      onClick={() => setSearchTerm('')}
                    >
                      Clear Search
                    </button>
                  )}
                  {(selectedLocations.length > 0 || selectedClients.length > 0 || selectedScopes.length > 0) && (
                    <button 
                      className="clear-filters-button"
                      onClick={() => {
                        setSelectedLocations([]);
                        setSelectedClients([]);
                        setSelectedScopes([]);
                      }}
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              )}
            </div>
            
            {filteredProjects.length > 0 && (
              <div className="chart-section">
                <div className="chart-header">
                  <h2>Project Distribution by Location</h2>
                  <div className="chart-toggle">
                    <button 
                      className={`chart-toggle-button ${chartType === 'pie' ? 'active' : ''}`}
                      onClick={() => setChartType('pie')}
                    >
                      <FaChartPie /> Pie Chart
                    </button>
                    <button 
                      className={`chart-toggle-button ${chartType === 'bar' ? 'active' : ''}`}
                      onClick={() => setChartType('bar')}
                    >
                      <FaChartBar /> Bar Chart
                    </button>
                  </div>
                </div>
                
                <div className="chart-container">
                  <ResponsiveContainer width="100%" height={400}>
                    {chartType === 'pie' ? (
                      <PieChart>
                        <Pie
                          data={locationChartData}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          outerRadius={150}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                          animationDuration={1000}
                          animationBegin={0}
                        >
                          {locationChartData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                              stroke="#282c34"
                              strokeWidth={1}
                            />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend 
                          layout="vertical"
                          verticalAlign="middle"
                          align="right"
                          wrapperStyle={{ paddingLeft: "20px" }}
                        />
                      </PieChart>
                    ) : (
                      <BarChart
                        data={locationChartData}
                        layout="vertical"
                        margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                        <XAxis type="number" />
                        <YAxis 
                          dataKey="name"
                          type="category"
                          width={80}
                          tick={{ fontSize: 12 }}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar 
                          dataKey="value"
                          name="Projects"
                          animationDuration={1000}
                          animationBegin={0}
                        >
                          {locationChartData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    )}
                  </ResponsiveContainer>
                </div>
                
                <div className="chart-header">
                  <h2>Project Distribution by Client</h2>
                </div>
                
                <div className="chart-container">
                  <ResponsiveContainer width="100%" height={400}>
                    {chartType === 'pie' ? (
                      <PieChart>
                        <Pie
                          data={clientChartData}
                          cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                        animationDuration={1000}
                        animationBegin={0}
                      >
                        {clientChartData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`}
                            fill={COLORS[(index + 3) % COLORS.length]} // Offset colors for variety
                            stroke="#282c34"
                            strokeWidth={1}
                          />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                      <Legend 
                        layout="vertical"
                        verticalAlign="middle"
                        align="right"
                        wrapperStyle={{ paddingLeft: "20px" }}
                      />
                    </PieChart>
                  ) : (
                    <BarChart
                      data={clientChartData}
                      layout="vertical"
                      margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                      <XAxis type="number" />
                      <YAxis 
                        dataKey="name"
                        type="category"
                        width={80}
                        tick={{ fontSize: 12 }}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar 
                        dataKey="value"
                        name="Projects"
                        animationDuration={1000}
                        animationBegin={0}
                      >
                        {clientChartData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`}
                            fill={COLORS[(index + 3) % COLORS.length]} // Offset colors for variety
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  )}
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </>
      )}
      
      <div className="projects-footer">
        <p>
          {filteredProjects.length > 0 
            ? `Showing ${filteredProjects.length} out of ${totalProjects} total projects`
            : 'No projects found matching your criteria'
          }
        </p>
        <p className="last-updated">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
      
      {/* Project Details Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProjectDetails}>
          <div className="project-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal-button" onClick={closeProjectDetails}>×</button>
            
            <div className="project-modal-header">
              <h2>{selectedProject.project_name}</h2>
              <span className="client-label">Client: {selectedProject.client_name}</span>
            </div>
            
            <div className="project-modal-body">
              <div className="project-details-grid">
                <div className="project-detail-item">
                  <h3>Location</h3>
                  <p><FaMapMarkerAlt /> {selectedProject.location}</p>
                </div>
                
                <div className="project-detail-item">
                  <h3>Scope of Work</h3>
                  <p className="scope-badge-large" style={{
                    backgroundColor: COLORS[uniqueScopes.indexOf(selectedProject.scope_of_work) % COLORS.length]
                  }}>
                    {selectedProject.scope_of_work}
                  </p>
                </div>
              </div>
              
              {selectedProject.additional_details && (
                <div className="project-additional-details">
                  <h3>Additional Details</h3>
                  <p>{selectedProject.additional_details}</p>
                </div>
              )}
              
              {selectedProject.image && (
                <div className="project-image-container">
                  <h3>Project Image</h3>
                  <img 
                    src={selectedProject.image}
                    alt={selectedProject.project_name}
                    className="project-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Available";
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;